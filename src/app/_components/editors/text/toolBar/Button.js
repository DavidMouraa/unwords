export default function Button({ children, isActive, onClick }) {
  return (
    <button 
      className={`rounded-sm p-1 hover:bg-primary-300 ${isActive && "bg-primary-300"} cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}