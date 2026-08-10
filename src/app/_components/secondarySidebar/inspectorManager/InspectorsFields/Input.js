import { useEffect, useRef } from "react"
import InspectorField from "./InspectorsField"

export default function Input({ label, defaultValue, action }) {
  const inputRef = useRef(null)

  function handleKeyDown(event) {
    if (event.key === "Enter") action(event.target.value)
  }

  return (
    <InspectorField
      label={label}
    >
      <input
        ref={inputRef}
        className="outline-0 p-1 rounded-sm bg-primary-600"
        type="text"
        defaultValue={defaultValue}
        onKeyDown={handleKeyDown}
      />
    </InspectorField>
  )
}