"use client"

import Tab from "./Tab"
import useFileManagerStore from "@/store/useFileManagerStore"

export default function Tabbar() {
  const { items, openFiles } = useFileManagerStore()

  return (
    <div className="flex w-full h-full bg-[#1a1a1a]">
      {openFiles.map((file) => (
        <Tab 
          key={file}
          id={file}
          data={items[file].data}
        />
      ))}
    </div>
  )
}