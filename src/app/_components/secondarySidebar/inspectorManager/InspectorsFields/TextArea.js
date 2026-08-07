import InspectorField from "./InspectorsField"
import { useEffect, useRef } from "react"

export default function TextArea({ label, defaultValue, action }) {
  const textAreaRef = useRef(null)

  function saveValue(event) {
    if (!textAreaRef.current.contains(event.target)) {
      action(textAreaRef.current.value)
    }
  }

  useEffect(() => {
    window.addEventListener("click", saveValue)
    
    return () => {
      window.removeEventListener('click', saveValue)
    }
  }, [])

  return (
    <InspectorField
      label={label}
    >
      <textarea 
        ref={textAreaRef}
        className="p-1 rounded-sm outline-0 bg-primary-600"
        defaultValue={defaultValue}
      />
    </InspectorField>
  )
}