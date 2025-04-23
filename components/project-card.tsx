import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  image: string
  demoLink: string
  repoLink: string
}

const ProjectCard = ({ title, description, technologies, image, demoLink, repoLink }: ProjectCardProps) => {
  return (
    <div className="bg-[#242424] rounded-lg overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={image || "/placeholder.svg?height=200&width=400"}
          alt={title}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="text-xs bg-[#1e1e1e] px-2 py-1 rounded-full text-gray-300">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-yellow-500 hover:underline"
          >
            <ExternalLink size={16} />
            Demo
          </a>
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-yellow-500 hover:underline"
          >
            <Github size={16} />
            Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
