"use client"

import { ReactFlowProvider } from "@xyflow/react";
import FileManager from "./_components/fileManager/FileManager";
import Tabbar from "./_components/tabbar/Tabbar";
import useFileManagerStore from "@/store/useFileManagerStore";
import EDITOR_MAP from "./_constants/editorsMap";
import { FaFileCircleXmark } from "react-icons/fa6";


export default function Home() {
  const { items, activedFileId } = useFileManagerStore()
  const activedFile = items[activedFileId]
  const EditorComponent = EDITOR_MAP[activedFile?.type]

  return (
    <div className="grid grid-cols-[250px_1fr] grid-rows-[35px_1fr] [grid-template-areas:'file-manager_tabbar''file-manager_editor'] gap-0.5 w-screen h-screen">
      <div className="[grid-area:file-manager]">
        <FileManager />
      </div>
      <div className="[grid-area:tabbar]">
        <Tabbar />
      </div>
      <div className="[grid-area:editor]">
        {activedFile ? (
          <ReactFlowProvider>
            <EditorComponent 
              key={activedFile.id}
            />
          </ReactFlowProvider>
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full bg-[#1a1a1a] text-[#c9c9c9] gap-5">
            <FaFileCircleXmark className="size-50" />
            <div className="flex flex-col justify-center items-center">
              <p>Nenhum arquivo aberto!</p>
              <p>Crie ou selecione um arquivo para começar</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
