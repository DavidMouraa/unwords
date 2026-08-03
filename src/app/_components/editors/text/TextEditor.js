"use client"

import useFileManagerStore from "@/store/useFileManagerStore"
import { EditorProvider } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Subscript from "@tiptap/extension-subscript"
import Superscript from "@tiptap/extension-superscript"
import { TextStyle, FontSize } from "@tiptap/extension-text-style"
import ToolBar from "./toolBar/ToolBar"


export default function TextEditor() {
  const { items, activeFileId, updateActiveItemContent } = useFileManagerStore()

  const activeFile = items[activeFileId]

  function handleUpdate({ editor }) {
    updateActiveItemContent(editor.getJSON())
  }

  return (
    <div className="size-full">
      <div className="flex flex-col items-center gap-3 w-full h-full p-3 tiptap-wrapper">
        <EditorProvider
          extensions={[
            StarterKit, 
            Subscript, 
            Superscript, 
            TextStyle,
            FontSize,
          ]}
          content={activeFile.data.content}
          onUpdate={handleUpdate}
          editorProps={{
            attributes: {
              class: "prose prose-invert max-w-200 w-full h-full rounded-sm p-4 outline-none shadow-normal overflow-y-auto bg-primary-400"
            }
          }}
          slotBefore={<ToolBar />}
          immediatelyRender={false}
        />
      </div>
    </div>
  )
}