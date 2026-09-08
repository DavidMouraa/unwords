import Field from "./Field";

export default function TextAreaField({ title, defaultValue }) {
  return (
    <Field
      title={title}
    >
      <textarea 
        className="p-1 rounded-sm outline-none bg-primary-400 focus:bg-primary-600"
        defaultValue={defaultValue} 
      />
    </Field>
  )
}