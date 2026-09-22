import { FaPlay } from "react-icons/fa";
import { useRouter } from "next/navigation";
import ImportButton from "./ImportButton";

export default function ControlMenu() {
 

  const router = useRouter()

  function openPlayer() {
    router.push("/player")
  }

  function onClick() {
    openPlayer()
  }

  return (
    <div className="h-full flex justify-between items-center px-1">
      <ImportButton />

      <button
        className="p-1 rounded-sm hover:bg-primary-400 text-secondary-500 hover:text-white cursor-pointer"
        onClick={onClick}
      >
        <FaPlay />
      </button>

      <div>

      </div>
    </div>
  )
}