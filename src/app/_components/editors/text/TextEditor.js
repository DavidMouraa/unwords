"use client"

import useFileManagerStore from "@/store/useFileManagerStore"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

export default function TextEditor() {
  const { items, activedFileId, updateActiveItemContent } = useFileManagerStore()
  
  const activeItem = items[activedFileId]

  const editor = useEditor({
    extensions: [StarterKit],
    content: activeItem.data.content,
    onUpdate: ({ editor }) => {
      updateActiveItemContent(editor.getJSON())
    },
    editorProps: {
      attributes: {
        class: "prose h-full p-5 text-black outline-none"
      },
    },
    immediatelyRender: false,
  })

  return (
    <div className="flex justify-center w-full h-full bg-[#1a1a1a]">
      <EditorContent 
        className="max-w-200 w-full border-x-2 bg-[#f1f1f1]"
        editor={editor} 
      />
    </div>
  )
}