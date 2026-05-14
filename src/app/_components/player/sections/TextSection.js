import { generateHTML } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

export default function TextSection({ section, items }) {
  const content = items[section.data.fileId].data.content
  const text = generateHTML(content, [
    StarterKit,
  ])

  return (
    <section dangerouslySetInnerHTML={{ __html: text }}>
      
    </section>
  )
}