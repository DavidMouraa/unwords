import Field from "./Field";

export default function TextAreaField({ title }) {
  return (
    <Field
      title={title}
    >
      <textarea className="p-1 rounded-sm outline-none bg-primary-400 focus:bg-primary-600" />
    </Field>
  )
}