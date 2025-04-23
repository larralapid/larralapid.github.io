interface SkillBadgeProps {
  name: string
}

const SkillBadge = ({ name }: SkillBadgeProps) => {
  return (
    <div className="bg-[#242424] text-sm px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition-colors cursor-default">
      {name}
    </div>
  )
}

export default SkillBadge
