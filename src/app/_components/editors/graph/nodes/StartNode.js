import { IoRocket } from "react-icons/io5";
import InvisiblePin from "../pins/InvisiblePin";

export default function StartNode() {
  return (
    <div 
      className="rounded-[50%] p-1 bg-[#ffffff] text-[#000000] text-lg"
    >
      <IoRocket />
      <InvisiblePin 
        type="source"
        position="right"
      />
    </div>
  )
}