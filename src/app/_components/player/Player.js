import useFileManagerStore from "@/store/useFileManagerStore"
import usePlayerStore from "@/store/usePlayerStore"

export default function Player() {
  const { content } = usePlayerStore()
  const { items } = useFileManagerStore()

  return (
    <div className="text-white">
      {content?.map((part) => (
        <p 
          key={part.id}
        >{part.id}</p>
      ))}
    </div>
  )
}