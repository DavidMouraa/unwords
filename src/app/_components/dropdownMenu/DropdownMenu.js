import useFileManagerStore from "@/store/useFileManagerStore"
import useGraphEditorStore from "@/store/useGraphEditorStore"
import * as DropdownMenuRadix from "@radix-ui/react-dropdown-menu"
import { Fragment, useState } from "react"

export default function DropdownMenu({ children, items }) {
  const { addNodes, addEdges } = useGraphEditorStore()
  const { setItems } = useFileManagerStore()

  async function onChangeHandle(event) {
    const file = event.target.files?.[0]

    if (!file) return

    try {
      const text = await file.text()
      const data = JSON.parse(text)

      console.log(data.nodes)
      
      addNodes(data.nodes)
      addEdges(data.edges)
      setItems(data.files)
    } catch (error) {
      console.error("Erro ao ler ou parserar o JSON: ", error)
    }
  }

  return (
    <>
      <input 
        id="import"
        className="hidden"
        type="file"
        onChange={onChangeHandle}
      />

      <DropdownMenuRadix.Root>
        <DropdownMenuRadix.Trigger asChild>
          <button className="text-secondary-500 hover:bg-primary-400 px-1 rounded-sm outline-none cursor-pointer">{ children }</button>
        </DropdownMenuRadix.Trigger>

        <DropdownMenuRadix.Portal>
          <DropdownMenuRadix.Content
            side="bottom"
            align="start"
            sideOffset={5}
            className="rounded-sm p-1 bg-primary-400 text-secondary-500"
          >
            <div className="flex flex-col">
              {items.map((item, index) => (
                <Fragment
                  key={index}
                >
                  {item.type === "button" && (
                    <button
                      className="flex items-start hover:bg-primary-300 cursor-pointer px-1 rounded-sm"
                      onClick={item.action}
                    >
                      {item.label}
                    </button>
                  )}
                  {item.type === "file" && (
                    <>
                      <label
                        className="flex items-start hover:bg-primary-300 cursor-pointer px-1 rounded-sm" 
                        htmlFor="import"
                      >
                        {item.label}
                      </label>
                    </>
                  )}
                </Fragment>
              ))}
            </div>
          </DropdownMenuRadix.Content>
        </DropdownMenuRadix.Portal>
      </DropdownMenuRadix.Root>
    </>
  )
}