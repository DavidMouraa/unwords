import { useCurrentEditor, useEditorState } from "@tiptap/react";
import Button from "./Button";
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { FaUnderline } from "react-icons/fa";
import { FaStrikethrough } from "react-icons/fa";
import { FaSubscript } from "react-icons/fa";
import { FaSuperscript } from "react-icons/fa";

export default function FontArea() {
  const { editor } = useCurrentEditor()

  const { 
    isBold,
    isItalic,
    isUnderline,
    isStrike,
    isSubscript,
    isSuperscript,
  } = useEditorState({
    editor,
    selector: ({ editor }) => ({
      isBold: editor.isActive('bold'),
      isItalic: editor.isActive('italic'),
      isUnderline: editor.isActive("underline"),
      isStrike: editor.isActive('strike'),
      isSubscript: editor.isActive('subscript'),
      isSuperscript: editor.isActive('superscript')
    })
  })

  return (
    <div className="p-2 text-sm">
      <div className="flex gap-1">
        <Button 
          isActive={isBold}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <FaBold />
        </Button>

        <Button
          isActive={isItalic}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <FaItalic />
        </Button>

        <Button
          isActive={isUnderline}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <FaUnderline />
        </Button>

        <Button
          isActive={isStrike}
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <FaStrikethrough />
        </Button>

        <Button
          isActive={isSubscript}
          onClick={() => editor.chain().focus().toggleSubscript().run()}
        >
          <FaSubscript />
        </Button>

        <Button
          isActive={isSuperscript}
          onClick={() => editor.chain().focus().toggleSuperscript().run()}
        >
          <FaSuperscript />
        </Button>
      </div>
    </div>
  )
}