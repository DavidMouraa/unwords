"use client"

import Tab from "./Tab"
import useFileManagerStore from "@/store/useFileManagerStore"

export default function Tabbar() {
  const { items, openFilesId } = useFileManagerStore()

  return (
    <div className="flex w-full h-full gap-0.5 bg-black">
      {openFilesId.map((fileId) => (
        <Tab 
          key={fileId}
          itemId={fileId}
          data={items[fileId].data}
        />
      ))}
    </div>
  )
}