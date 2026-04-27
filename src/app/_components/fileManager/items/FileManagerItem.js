export default function FileManagerItem({ children, onClick }) {
  return (
    <div 
      className="p-1 rounded-sm hover:bg-[#0f0f0f] text-white cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  )
}