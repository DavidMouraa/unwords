import { generateHTML } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

export default function TextSection({ section }) {
  const content = section.data.content || {type: "doc", content: []}
  const text = generateHTML(content, [
    StarterKit,
  ])

  return (
    <section dangerouslySetInnerHTML={{ __html: text }}>
      
    </section>
  )
}