import { useEffect, useRef } from "react"

export default function Input({ itemId, label, defaultValue, action }) {
  const inputRef = useRef(null)

  function handleKeyDown(event) {
    if (event.key === "Enter" && event.target.value) action(itemId, event.target.value) 
      console.log(event.key)
  }

  useEffect(() => {
    function confirmChange(event) {
      if (!inputRef.current.contains(event.target)) {
        action(itemId, inputRef.current.value)
      }
      
    }
    
    window.addEventListener("click", confirmChange)
    
    return () => {
      window.removeEventListener("click", confirmChange)
    }
  }, [action, itemId])

  return (
    <div className="flex flex-col gap-1">
      <label>{`${label}:`}</label>
      <input 
        ref={inputRef}
        type="text"
        className="w-full bg-primary-600 outline-none p-1 rounded-smp-1 rounded-sm"
        defaultValue={defaultValue}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}