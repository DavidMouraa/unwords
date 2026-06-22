import { useState, useRef } from "react";
import Panel from "./Panel";

export default function ResizablePanel({ children, className, setSidebarsWidth }) {
  const [isDragging, setIsDragging] = useState(false)

  const isResizing = useRef(false)

  function startResize(event) {
    event.preventDefault()
    setIsDragging(true)
    isResizing.current = true

    window.addEventListener("mousemove", resize)
    window.addEventListener("mouseup", stopResize)
  }

  function resize(event) {
    if (!isResizing.current) return

    const newWidth = event.clientX

    if (newWidth > 150 && newWidth < 600) {
      setSidebarsWidth((sidebarsWidth) => ({...sidebarsWidth, leftSidebar: newWidth}))
    }
  }

  function stopResize() {
    setIsDragging(false)
    isResizing.current = false

    window.removeEventListener("mousemove", resize)
    window.removeEventListener("mouseup", stopResize)
  }

  return (
    <Panel
      className={`relative ${className}`}
    >
      <div
        onMouseDown={startResize}
        className={`z-1 absolute top-0 -right-1 w-1 h-full rounded-sm hover:bg-secondary-500 ${isDragging && "bg-secondary-500"} cursor-ew-resize`}
      ></div>

      {children}
    </Panel>
  )
}