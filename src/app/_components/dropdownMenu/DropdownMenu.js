import * as DropdownMenuRadix from "@radix-ui/react-dropdown-menu"
import { Fragment } from "react"

export default function DropdownMenu({ children, items }) {
  return (
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
                    <input 
                      id="import"
                      className="hidden"
                      type="file"
                      onChange={item.action}
                    />
                  </>
                )}
              </Fragment>
            ))}
          </div>
        </DropdownMenuRadix.Content>
      </DropdownMenuRadix.Portal>
    </DropdownMenuRadix.Root>
  )
}