export default function Button({ children, onClick }) {
  return (
    <button 
      className="rounded-[50%] p-2 hover:bg-primary-500 text-3xl cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  )
}