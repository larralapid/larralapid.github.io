interface ExperienceCardProps {
  position: string
  company: string
  duration: string
  description: string
}

const ExperienceCard = ({ position, company, duration, description }: ExperienceCardProps) => {
  return (
    <div className="bg-[#242424] rounded-lg p-5 relative">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
        <div>
          <h3 className="text-lg font-medium">{position}</h3>
          <p className="text-yellow-500">{company}</p>
        </div>
        <div className="bg-[#1e1e1e] text-sm px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">{duration}</div>
      </div>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  )
}

export default ExperienceCard
