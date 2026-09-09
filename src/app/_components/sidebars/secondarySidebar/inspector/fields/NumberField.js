import { useRef } from "react";
import Field from "./Field";

export default function NumberField({ title, defaultValue, saveValue }) {
  const inputRef = useRef(null)

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      saveValue(event.target.value)
    }
  }

  return (
    <Field
      title={title}
    >
      <div className="flex item-center px-1 rounded-sm bg-primary-400">
        <input 
          ref={inputRef}
          className="w-full outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          type="number" 
          defaultValue={defaultValue}
          onKeyDown={handleKeyDown}
        />
        <div className="flex flex-col text-[7px]">
          <button 
            className="p-0.5 hover:bg-primary-400 cursor-pointer"
            onClick={() => inputRef.current.stepUp()}
          >
            ▲
          </button>
          <button 
            className="p-0.5 hover:bg-primary-400 cursor-pointer"
            onClick={(event) => inputRef.current.stepDown()}
          >
            ▼
          </button>
        </div>
      </div>
    </Field>
  )
}