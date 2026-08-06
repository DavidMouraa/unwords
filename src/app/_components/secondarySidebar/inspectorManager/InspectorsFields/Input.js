import InspectorField from "./InspectorsField"

export default function Input({ label, defaultValue, action }) {
  function handleKeyDown(event) {
    if (event.key === "Enter") action(event.target.value)
  }

  return (
    <InspectorField
      label={label}
    >
      <input
        className="outline-0 p-1 rounded-sm bg-primary-600"
        type="text"
        defaultValue={defaultValue}
        onKeyDown={handleKeyDown}
      />
    </InspectorField>
  )
}