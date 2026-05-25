export default function Panel({ children, className }) {
  return (
    <div className={`rounded-sm bg-primary-500 ${className}`}>
      {children}
    </div>
  )
}