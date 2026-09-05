export default function Field({ children, title }) {
  return (
    <div className="flex flex-col gap-1 text-xs">
      <label>{title}:</label>
      {children}
    </div>
  )
}