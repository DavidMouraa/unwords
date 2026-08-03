import { useState } from "react";
import ContextMenu from "../contextMenu/ContextMenu";
import FileManager from "./sections/fileManager/FileManager";
import VariableManager from "./sections/variableManager/VariableManager";

export default function PrimarySidebar() {
  const [currentSection, setCurrentSection] = useState("file-manager")

  return (
    <div className="flex flex-col h-full">
      <FileManager 
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <VariableManager 
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
    </div>
  )
}