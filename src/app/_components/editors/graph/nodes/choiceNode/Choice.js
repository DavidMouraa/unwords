import useGraphEditorStore from "@/store/useGraphEditorStore"

export default function Choice({ ref, index, nodeId, choice, renamingChoiceId, setRenamingChoiceId }) {
  const { renameNodeChoice } = useGraphEditorStore()

  function onChange(event) {
    console.log(event.target.value)
    renameNodeChoice(nodeId, choice.id, event.target.value)
  }

  return (
    <div 
      ref={(element) => ref.current[index] = element}
      className="rounded-sm p-1 bg-primary-500 cursor-text"
      onClick={() => setRenamingChoiceId(choice.id)}
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
  )
}