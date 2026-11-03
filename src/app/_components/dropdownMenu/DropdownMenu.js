import * as DropdownMenuRadix from "@radix-ui/react-dropdown-menu"

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
          <button
            className="hover:bg-primary-600 px-1 rounded-sm"
          >
            Salvar
          </button>
        </DropdownMenuRadix.Content>
      </DropdownMenuRadix.Portal>
    </DropdownMenuRadix.Root>
  )
}