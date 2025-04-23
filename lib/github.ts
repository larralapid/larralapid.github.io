export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string
  updated_at: string
  stargazers_count: number
  forks_count: number
  language: string
  owner: {
    login: string
    avatar_url: string
  }
}

export async function getRecentRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=8&type=public`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 }, // Revalidate every hour
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const repos: GitHubRepo[] = await response.json()
    return repos
  } catch (error) {
    console.error("Error fetching GitHub repos:", error)
    return []
  }
}
