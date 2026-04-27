import { ReactFlowProvider } from "@xyflow/react";
import GraphEditor from "./_components/editors/graph/GraphEditor";
import FileManager from "./_components/fileManager/FileManager";
import Tabbar from "./_components/tabbar/Tabbar";
import TextEditor from "./_components/editors/text/TextEditor";

export default function Home() {
  return (
    <div className="grid grid-cols-[250px_1fr] grid-rows-[35px_1fr] [grid-template-areas:'file-manager_tabbar''file-manager_editor'] gap-0.5 w-screen h-screen">
      <div className="[grid-area:file-manager]">
        <FileManager />
      </div>
      <div className="[grid-area:tabbar">
        <Tabbar />
      </div>
      <div className="[grid-area:editor]">
        {/* <ReactFlowProvider>
          <GraphEditor />
        </ReactFlowProvider> */}
        <TextEditor />
      </div>
    </div>
  );
}
