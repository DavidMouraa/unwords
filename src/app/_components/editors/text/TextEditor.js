"use client"

import useFileManagerStore from "@/store/useFileManagerStore"
import { EditorProvider } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Toolbar from "./Toolbar"
import { useState } from "react"

export default function TextEditor() {
  const { items, activeFileId, updateActiveItemContent } = useFileManagerStore()

  const [tick, setTick] = useState(0)
  
  const activeItem = items[activeFileId]

  function onUpdate({ editor }) {
    setTick(tick + 1)

    updateActiveItemContent(editor.getJSON())
  }

  function onSelectionUpdate() {
    setTick(tick + 1)
  }

  return (
    <div className="flex justify-center bg-primary-500 h-full ">
      <div className="text-editor relative flex flex-col gap-2 max-w-200 w-full h-full p-3 bg-secondary-500">
        <EditorProvider
          slotBefore={
            <Toolbar 
              tick={tick}
            />
          }
          extensions={[StarterKit]}
          content={activeItem.data.content}
          onUpdate={onUpdate}
          onSelectionUpdate={onSelectionUpdate}
          editorProps={{
            attributes: {
              class: "prose max-w-none w-full h-full text-black outline-none overflow-y-auto"
            },
          }}
          immediatelyRender={false}
        />
      </div>
    </div>
  )
}