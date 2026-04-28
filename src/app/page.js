"use client"

import { ReactFlowProvider } from "@xyflow/react";
import GraphEditor from "./_components/editors/graph/GraphEditor";
import FileManager from "./_components/fileManager/FileManager";
import Tabbar from "./_components/tabbar/Tabbar";
import useFileManagerStore from "@/store/useFileManagerStore";
import EDITOR_MAP from "./_constants/editorsMap";

export default function Home() {
  const { items, activedFileId } = useFileManagerStore()
  const activedFile = items[activedFileId]
  const EditorComponent = EDITOR_MAP[activedFile?.type]

  console.log(EditorComponent)

  return (
    <div className="grid grid-cols-[250px_1fr] grid-rows-[35px_1fr] [grid-template-areas:'file-manager_tabbar''file-manager_editor'] gap-0.5 w-screen h-screen">
      <div className="[grid-area:file-manager]">
        <FileManager />
      </div>
      <div className="[grid-area:tabbar]">
        <Tabbar />
      </div>
      <div className="[grid-area:editor]">
        {activedFile && (
          <ReactFlowProvider>
            <EditorComponent />
          </ReactFlowProvider>
        )}
        {/* <TextEditor /> */}
      </div>
    </div>
  );
}
