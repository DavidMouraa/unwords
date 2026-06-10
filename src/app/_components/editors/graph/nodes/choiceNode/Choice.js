import useGraphEditorStore from "@/store/useGraphEditorStore"
import Pin from "../../pins/Pin"

export default function Choice({ ref, index, nodeId, choice, renamingChoiceId, setRenamingChoiceId }) {
  const { renameNodeChoice } = useGraphEditorStore()

  function onChange(event) {
    renameNodeChoice(nodeId, choice.id, event.target.value)
  }

  return (
    <div 
      ref={(element) => ref.current[index] = element}
      className="flex justify-"
      onClick={() => setRenamingChoiceId(choice.id)}
    >
      <div 
        className="w-full rounded-sm p-1 bg-primary-500 cursor-text"
      >
        {renamingChoiceId !== choice.id ? (
            <label className="w-full truncate">
              {choice.label}
            </label>
          ) : (
            <input
              className="w-full px-1 bg-primary-600 outline-none rounded-sm"
              type="text"
              defaultValue={choice.label}
              autoFocus
              onChange={onChange}
            />
        )}
      </div>
      <Pin 
        id={choice.id}
        type={"source"}
        position={"right"}
      />
    </div>
  )
}