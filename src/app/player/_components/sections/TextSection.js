import { generateHTML } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { useEffect } from "react"

export default function TextSection({ section, setNextSectionId }) {
  const content = section.data.content || {type: "doc", content: []}
  const text = generateHTML(content, [
    StarterKit,
  ])
  
  useEffect(() => {
    setNextSectionId(section.next)
  }, [])

  return (
    <div 
      className="rounded-sm border p-3"
      dangerouslySetInnerHTML={{ __html: text }}
    >
      
    </div>
  )
}