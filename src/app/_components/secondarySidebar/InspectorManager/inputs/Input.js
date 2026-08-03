export default function Input({ label, defaultValue }) {
  return (
    <div className="flex flex-col gap-1">
      <label>{`${label}:`}</label>
      <input 
        type="text"
        className="w-full bg-primary-600 outline-none p-1 rounded-smp-1 rounded-sm"
        defaultValue={defaultValue}
      />
    </div>
  )
}