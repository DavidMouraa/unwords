export default function Select({ children, label, defaultValue }) {
  return (
    <div className="flex flex-col gap-1">
      <label>{label}:</label>
      <select 
        className="p-1 rounded-sm bg-primary-600"
        defaultValue={defaultValue}
      >
        {children}
      </select>
    </div>
  )
}