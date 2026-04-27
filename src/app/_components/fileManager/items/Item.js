export default function Item({ children, onClick }) {
  return (
    <div 
      className="p-1 rounded-sm hover:bg-[#0f0f0f] cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  )
}