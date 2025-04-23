import { Star, GitFork, ExternalLink, Code } from "lucide-react"
import type { GitHubRepo } from "@/lib/github"

interface GitHubRepoCardProps {
  repo: GitHubRepo
}

const GitHubRepoCard = ({ repo }: GitHubRepoCardProps) => {
  // Format date to be more readable
  const updatedAt = new Date(repo.updated_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  // Generate a color based on the language
  const getLanguageColor = (language: string | null) => {
    if (!language) return "#808080"

    const colors: Record<string, string> = {
      JavaScript: "#f1e05a",
      TypeScript: "#3178c6",
      HTML: "#e34c26",
      CSS: "#563d7c",
      Python: "#3572A5",
      Java: "#b07219",
      Ruby: "#701516",
      PHP: "#4F5D95",
      Go: "#00ADD8",
      Rust: "#dea584",
      C: "#555555",
      "C++": "#f34b7d",
      "C#": "#178600",
    }

    return colors[language] || "#808080"
  }

  return (
    <div className="bg-[#242424] rounded-lg p-5 flex flex-col h-full">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center">
          <div className="bg-[#1e1e1e] p-2 rounded-lg mr-3">
            <Code className="text-yellow-500" size={20} />
          </div>
          <div>
            <h3 className="text-lg font-medium">{repo.name}</h3>
            <div className="flex items-center text-xs text-gray-400 mt-1">
              <div className="flex items-center mr-3">
                <Star size={14} className="mr-1" />
                {repo.stargazers_count}
              </div>
              <div className="flex items-center">
                <GitFork size={14} className="mr-1" />
                {repo.forks_count}
              </div>
            </div>
          </div>
        </div>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1e1e1e] p-2 rounded-lg hover:bg-yellow-500 transition-colors"
        >
          <ExternalLink size={16} />
        </a>
      </div>

      <p className="text-gray-400 text-sm mb-4 flex-grow">{repo.description || "No description provided"}</p>

      <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#333]">
        {repo.language && (
          <div className="flex items-center">
            <span
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: getLanguageColor(repo.language) }}
            ></span>
            <span className="text-xs text-gray-300">{repo.language}</span>
          </div>
        )}
        <div className="text-xs text-gray-400">Updated {updatedAt}</div>
      </div>
    </div>
  )
}

export default GitHubRepoCard
