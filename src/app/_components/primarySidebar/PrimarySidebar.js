import { useState } from "react";
import ContextMenu from "../contextMenu/ContextMenu";
import FileManager from "./sections/fileManager/FileManager";
import VariableManager from "./sections/variableManager/VariableManager";

export default function PrimarySidebar() {

  return (
    <div className="flex flex-col h-full">
      <FileManager />
      <VariableManager />
    </div>
  )
}