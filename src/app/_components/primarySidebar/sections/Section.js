import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import ContextMenu from "../../contextMenu/ContextMenu";

export default function Section({ children, title, contextMenuOptionsKeys }) {
  const [isOpen, setIsOpen] = useState(true)

  function toggleIsOpen() {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  return (
    <ContextMenu
      itemKeys={contextMenuOptionsKeys}
    >
      <div className={`flex flex-col text-sm text-secondary-500`}> 
        <div 
          className="flex items-center gap-1.5 px-2 py-1 border-y border-primary-600 font-bold uppercase cursor-pointer"
          onClick={toggleIsOpen}
        >
          {isOpen ? (
            <FaChevronDown />
          ) : (
            <FaChevronRight />
          )}
          {title}
        </div>

        <div
          className={`${!isOpen ? "h-0" : ""} overflow-hidden`}
        >
          {children}
        </div>
      </div>
    </ContextMenu>
  )
}