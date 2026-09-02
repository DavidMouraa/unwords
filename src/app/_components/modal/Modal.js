import { useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import QueryBuilder from "../queryBuilder/QueryBuilder"

export default function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger className="text-white">
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 w-screen h-screen bg-black/90" />
        <Dialog.Content className="fixed inset-0 top-1/2 left-1/2 -translate-1/2 flex justify-center w-200 h-200 bg-primary-400">
          <Dialog.Title className="hidden">Modal Title</Dialog.Title>

          <QueryBuilder />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}