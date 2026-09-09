export default function Field({ children, title }) {
  return (
    <div className="flex flex-col gap-1 text-sm">
      <label>{title}:</label>
      {children}
    </div>
  )
}