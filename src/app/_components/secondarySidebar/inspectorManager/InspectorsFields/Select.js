import InspectorField from "./InspectorsField"

export default function Select({ children, label, defaultValue, action }) {
  function handleChange(event) {
    action(event.target.value)
  }

  return (
    <InspectorField
      label={label}
    >
      <select
        className="p-1 py-1.5 rounded-sm bg-primary-600"
        defaultValue={defaultValue}
        onChange={handleChange}
      >
        {children}
      </select>
    </InspectorField>
  )
}