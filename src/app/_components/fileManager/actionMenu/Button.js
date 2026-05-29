export default function Button({ children }) {
  return (
    <button
      className="hover:bg-primary-300 rounded-sm p-1 cursor-pointer"
    >
      {children}
    </button>
  )
}