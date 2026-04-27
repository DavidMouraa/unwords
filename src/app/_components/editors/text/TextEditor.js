"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

export default function TextEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World!</p>",
    editorProps: {
      attributes: {
        class: "prose h-full p-5 text-black outline-none"
      },
    },
    immediatelyRender: false,
  })

  return (
    <div className="flex justify-center w-full h-full">
      <EditorContent 
        className="max-w-200 w-full bg-[#f1f1f1]"
        editor={editor} 
      />
    </div>
  )
}