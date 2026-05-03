export default function Panel({ children, className }) {
  return (
    <div className={`rounded-sm overflow-hidden bg-[#1a1a1a] ${className}`}>
      {children}
    </div>
  )
}