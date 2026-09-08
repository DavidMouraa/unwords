import Field from "./Field";

export default function SelectField({ children, title, defaultValue, saveValue }) {
  function handleChange(event) {
    saveValue(event.target.value)
  }

  return (
    <Field
      title={title}
    >
      <select 
        className="p-1 rounded-sm bg-primary-400 focus:bg-primary-600 outline-none"
        defaultValue={defaultValue}
        onChange={handleChange}
      >
        {children}
      </select>
    </Field>
  )
}