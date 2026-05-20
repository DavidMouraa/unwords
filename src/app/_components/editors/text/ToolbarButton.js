export default function ToolbarButton({ children, editor, type, onClick, tick }) {
  const isActive = editor.isActive(type)
  
  return (
    <button 
      className={`p-1 rounded-sm hover:bg-primary-300 ${isActive ? "bg-primary-300" : ""} hover:text-white cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}