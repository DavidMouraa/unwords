import Field from "./Field";

export default function InputField({ title, defaultValue, saveValue }) {
  function handleChange(event) {
    saveValue(event.target.value)
  }

  return (
    <Field
      title={title}
    >
      <input 
        className="bg-primary-400 p-1 rounded-sm focus:bg-primary-600 outline-none" 
        type="text" 
        defaultValue={defaultValue} 
        onChange={handleChange}
      />
    </Field>
  )
}