import Field from "./Field";

export default function SelectField({ children, title }) {
  return (
    <Field
      title={title}
    >
      <select className="p-1 rounded-sm bg-primary-400 focus:bg-primary-600 outline-none">
        {children}
      </select>
    </Field>
  )
}