import { RepositoryItem } from './RepositoryItem'
import '../styles/repositories.scss'
import { useEffect, useState } from 'react'

interface Repository {
    name: string
    description: string
    html_url: string
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos').then(
            (response) => {
                response.json().then((data) => {
                    setRepositories(data)
                })
            }
        )
    }, [])

    return (
        <section>
            <h2>Lista de repositórios</h2>

            <ul>
                {repositories.map((repository) => (
                    <RepositoryItem
                        key={repository.name}
                        repository={repository}
                    />
                ))}
            </ul>
        </section>
    )
}
