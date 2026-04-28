import { IoDocumentText } from "react-icons/io5";
import File from "./File";
import useFileManagerStore from "@/store/useFileManagerStore";

export default function TextFile({ itemId }) {

  return (
    <File
      itemId={itemId}
    >
      <IoDocumentText />
    </File>
  )
}