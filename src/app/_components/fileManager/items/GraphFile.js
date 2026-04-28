import useFileManagerStore from "@/store/useFileManagerStore";
import File from "./File"
import { FaCircleNodes } from "react-icons/fa6";

export default function GraphFile({ itemId }) {
  const { items, activedItemId } = useFileManagerStore()

  return (
    <File
      itemId={itemId}
    >
      <FaCircleNodes />
    </File>
  )
}