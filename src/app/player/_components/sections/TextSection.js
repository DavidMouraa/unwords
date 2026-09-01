import Subscript from "@tiptap/extension-subscript"
import Superscript from "@tiptap/extension-superscript"
import { generateHTML } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { useEffect } from "react"

export default function TextSection({ section, setNextSectionId }) {
  const content = section.data.content || {type: "doc", content: []}
  const text = generateHTML(content, [
    StarterKit,
    Subscript,
    Superscript,
  ])
  
  useEffect(() => {
    setNextSectionId(section.next)
  }, [])

  return (
    <div 
      className="rounded-sm py-3"
      dangerouslySetInnerHTML={{ __html: text }}
    >
      
    </div>
  )
}