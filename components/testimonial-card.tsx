import Image from "next/image"

interface TestimonialCardProps {
  avatar: string
  name: string
  text: string
}

const TestimonialCard = ({ avatar, name, text }: TestimonialCardProps) => {
  return (
    <div className="bg-[#242424] rounded-lg p-6">
      <div className="flex items-center gap-4 mb-4">
        <Image src={avatar || "/placeholder.svg"} alt={name} width={60} height={60} className="rounded-full" />
        <h3 className="text-lg font-medium">{name}</h3>
      </div>
      <p className="text-gray-400 text-sm">{text}</p>
    </div>
  )
}

export default TestimonialCard
