import Node from "./Node";
import { MdEdit } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";

export default function TextNode({ selected, id }) {
  return (
    <Node
      selected={selected}
      id={id}
      label={"Texto"}
      color={"#1d46b8"}
    >
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1 text-white hover:underline cursor-pointer">
          <IoDocumentText />
          arquivo
        </div>
        <button className="flex justify-center w-full p-2 rounded-sm bg-white cursor-pointer">
          <MdEdit />
        </button>
      </div>
    </Node>
  );
}