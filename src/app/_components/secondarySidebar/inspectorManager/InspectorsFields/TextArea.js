import InspectorField from "./InspectorsField"

export default function TextArea({ label, defaultValue }) {
  return (
    <InspectorField
      label={label}
    >
      <textarea 
        className="p-1 rounded-sm bg-primary-600"
        defaultValue={defaultValue}
      />
    </InspectorField>
  )
}