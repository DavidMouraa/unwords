export default function InspectorField({ children, label }) {
  return(
    <div className="flex flex-col gap-1">
      <label>{label}:</label>
      {children}
    </div>
  )
}