export default function Button({ children, onClick }) {
  return (
    <button
      className="hover:bg-primary-300 rounded-sm p-1 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  )
}