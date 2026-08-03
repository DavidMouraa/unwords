export default function TextArea({ label, defaultValue }) {
  return (
    <div className="flex flex-col gap-1">
      <label>{`${label}:`}</label>
      <textarea className="w-full bg-primary-600 outline-none p-1 rounded-sm" type="text" defaultValue={defaultValue} />
    </div>
  )
}