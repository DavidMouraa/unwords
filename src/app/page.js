"use client"

import { ReactFlowProvider } from "@xyflow/react";
import Tabbar from "./_components/tabbar/Tabbar";
import useFileManagerStore from "@/store/useFileManagerStore";
import EDITOR_MAP from "./_constants/maps/editorsMap";
import { FaFileCircleXmark } from "react-icons/fa6";
import Panel from "./_components/panels/Panel";
import ControlMenu from "./_components/controlMenu/ControlMenu";
import PrimarySidebar from "./_components/primarySidebar/PrimarySidebar";
import SecondarySidebar from "./_components/secondarySidebar/SecondarySidebar";

export default function Home() {
  const { items, activeFileId } = useFileManagerStore()

  const activeFile = items[activeFileId]
  const EditorComponent = EDITOR_MAP[activeFile?.type]

  return (
    <div 
      style={{
        gridTemplateColumns: `200px 1fr 200px`
      }}
      className="grid grid-rows-[35px_35px_1fr] [grid-template-areas:'control-menu_control-menu_control-menu''primary-sidebar_tabbar_config-panel''primary-sidebar_editor_config-panel'] gap-0.5 w-screen h-screen border-2"
    >
      <Panel className="[grid-area:control-menu]">
        <ControlMenu />
      </Panel>

      <Panel className="[grid-area:primary-sidebar]">
        <PrimarySidebar />
      </Panel>

      <Panel className="[grid-area:config-panel]">
        <SecondarySidebar />
      </Panel>

      <Panel className="[grid-area:tabbar] overflow-x-auto no-scrollbar">
        <Tabbar />
      </Panel>

      <Panel className="[grid-area:editor] min-h-0">
        {activeFile ? (
          <ReactFlowProvider>
            <EditorComponent 
              key={activeFile.id}
            />
          </ReactFlowProvider>
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full bg-primary-500 text-secondary-500 gap-5">
            <FaFileCircleXmark className="size-50" />
            <div className="flex flex-col justify-center items-center">
              <p>Nenhum arquivo aberto!</p>
              <p>Crie ou selecione um arquivo para começar</p>
            </div>
          </div>
        )}
      </Panel>
    </div>
  );
}
