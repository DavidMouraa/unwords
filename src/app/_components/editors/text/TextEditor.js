"use client"

import useFileManagerStore from "@/store/useFileManagerStore"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

export default function TextEditor() {
  const { items, activedFileId, updateActivedItemContent } = useFileManagerStore()
  
  const activeItem = items[activedFileId]

  const editor = useEditor({
    extensions: [StarterKit],
    content: activeItem.data.content,
    onUpdate: ({ editor }) => {
      updateActivedItemContent(editor.getJSON())
    },
    editorProps: {
      attributes: {
        class: "prose max-w-none w-full h-full p-5 text-black outline-none"
      },
    },
    immediatelyRender: false,
  })

  return (
    <div className="flex justify-center h-full bg-[#1a1a1a]">
      <EditorContent 
        className="max-w-200 w-full bg-[#f1f1f1]"
        editor={editor} 
      />
    </div>
  )
}