import useGraphEditorStore from "@/store/useGraphEditorStore"
import Input from "./Input"

export default function InputChoice({ item, choice }) {
  const { renameNodeChoice } = useGraphEditorStore()

  function inputAction(newLabel) {
    renameNodeChoice(item.id, choice.id, newLabel)
  }

  return (
    <Input
      defaultValue={choice.label}
      action={inputAction}
    />
  )
}