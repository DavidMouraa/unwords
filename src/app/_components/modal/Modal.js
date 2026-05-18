import { useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import Player from "../player/Player"

export default function Modal({ children, title, description, overlayClass, contentClass, triggerClass }) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root 
      open={open} 
      onOpenChange={setOpen}
    >
      <Dialog.Trigger
        className={triggerClass}
      >
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay 
          className={overlayClass}
        >
          <Dialog.Content 
            className={contentClass}
          >
            <div className="hidden">
              <Dialog.Title>{title}</Dialog.Title>
              <Dialog.Description>{description}</Dialog.Description>
            </div>
            <Player />
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}