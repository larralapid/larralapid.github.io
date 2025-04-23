import { Award, ExternalLink } from "lucide-react"

interface CertificationCardProps {
  title: string
  organization: string
  date: string
  credentialLink: string
}

const CertificationCard = ({ title, organization, date, credentialLink }: CertificationCardProps) => {
  return (
    <div className="bg-[#242424] rounded-lg p-5 flex gap-4">
      <div className="bg-[#1e1e1e] p-3 rounded-lg h-fit">
        <Award size={24} className="text-yellow-500" />
      </div>
      <div>
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <h3 className="text-lg font-medium">{title}</h3>
          <div className="text-sm text-gray-400 mt-1 md:mt-0">{date}</div>
        </div>
        <p className="text-yellow-500 text-sm mb-2">{organization}</p>
        <a
          href={credentialLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-gray-300 hover:text-yellow-500"
        >
          <ExternalLink size={16} />
          Show credential
        </a>
      </div>
    </div>
  )
}

export default CertificationCard
