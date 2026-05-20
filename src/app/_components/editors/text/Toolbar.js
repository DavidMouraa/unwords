import { FaBold } from "react-icons/fa6";
import { FaItalic } from "react-icons/fa6";
import { FaUnderline } from "react-icons/fa6";
import { FaStrikethrough } from "react-icons/fa6";
import ToolbarButton from "./ToolbarButton";
import { useCurrentEditor } from "@tiptap/react";

export default function Toolbar({ tick }) {
  const { editor } = useCurrentEditor()

  function toggleBold() {
    editor.chain().focus().toggleBold().run()
  }

  function toggleItalic() {
    editor.chain().focus().toggleItalic().run()
  }

  function toggleUnderline() {
    editor.chain().focus().toggleUnderline().run()
  }

  function toggleStrike() {
    editor.chain().focus().toggleStrike().run()
  }

  return (
    <div className="w-full flex gap-1 rounded-sm p-2 bg-primary-500 text-secondary-500">
      <div className="flex gap-1 w-full justify-center">
        <ToolbarButton
          editor={editor}
          type="bold"
          tick={tick}
          onClick={toggleBold}
          >
          <FaBold />
        </ToolbarButton>

        <ToolbarButton
          editor={editor}
          type="italic"
          tick={tick}
          onClick={toggleItalic}
          >
          <FaItalic />
        </ToolbarButton>

        <ToolbarButton
          editor={editor}
          type="underline"
          tick={tick}
          onClick={toggleUnderline}
          >
          <FaUnderline />
        </ToolbarButton>

        <ToolbarButton
          editor={editor}
          type="strike"
          tick={tick}
          onClick={toggleStrike}
        >
          <FaStrikethrough />
        </ToolbarButton>
      </div>
    </div>
  )
}