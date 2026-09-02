import FileExplorer from "./fileExplorer/FileExplorer";
import VariableExplorer from "./variableExplorer/VariableExplorer";

export default function PrimarySidebar() {
  return (
    <div>
      <FileExplorer />
      <VariableExplorer />
    </div>
  )
}