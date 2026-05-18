import useFileManagerStore from "@/store/useFileManagerStore"
import usePlayerStore from "@/store/usePlayerStore"
import TextSection from "./sections/TextSection"

export default function Player() {
  const { content } = usePlayerStore()

  return (
    <div className="text-white">
      {content?.map((section) => (
        <TextSection 
          key={section.id}
          section={section}
        />
      ))}
    </div>
  )
}