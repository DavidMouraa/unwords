import Node from "./Node";
import { MdEdit } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import useFileManagerStore from "@/store/useFileManagerStore";

export default function TextNode({ selected, id, type }) {
  const { items, activedFileId } = useFileManagerStore()
  const nodeFileId = items[activedFileId].data.nodes[items[activedFileId].data.nodes.findIndex((node) => node.id === id)]?.data.fileId
  const nodeFile = items[nodeFileId]

  return (
    <Node
      selected={selected}
      id={id}
      type={type}
      label={"Texto"}
      color={"#1d46b8"}
    >
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1 text-white hover:underline cursor-pointer">
          <IoDocumentText />
          {nodeFile?.data.label || "Sem Arquivo"}
        </div>
        <button className="flex justify-center w-full p-2 rounded-sm bg-white cursor-pointer">
          <MdEdit 
            className="text-black"
          />
        </button>
      </div>
    </Node>
  );
}