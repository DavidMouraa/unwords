'use client'

import { 
  ReactFlow,
  Background,
  useReactFlow
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"
import TextNode from "./nodes/TextNode"
import ContextMenu from "../../contextMenu/ContextMenu"
import useGraphEditorStore from "@/store/useGraphEditorStore"
import useFileManagerStore from "@/store/useFileManagerStore"

const nodeTypes = {
  text: TextNode,
}

export default function GraphEditor() {
  const { 
    setClientPos,
  } = useGraphEditorStore()
  const { 
    screenToFlowPosition,
  } = useReactFlow()
  const { 
    items, 
    activedFileId, 
    onNodesChange,
    onEdgesChange,
    onConnect,
  } = useFileManagerStore()

  const fitViewOptions = {
    padding: 2,
  }
  
  const activedFile = items[activedFileId]
  const contextMenuItemKeys = ["createTextNode"]

  function onPaneContextMenu(event) {
    setClientPos(screenToFlowPosition({
      x: event.clientX,
      y: event.clientY,
    }))
  }

  return (
    <ContextMenu
      itemKeys={contextMenuItemKeys}
    >
      <ReactFlow
        className='bg-[#1a1a1a]! text-xs'
        nodes={activedFile.data.nodes}
        edges={activedFile.data.edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onPaneContextMenu={onPaneContextMenu}
        nodeTypes={nodeTypes}
        fitViewOptions={fitViewOptions}
        fitView
      >
        <Background 
          id='bg-1'
          color='#101010'
          variant='lines'
          gap={10}
        />
        <Background 
          id='bg-2'
          color='#000'
          variant="lines"
          gap={50}
        />
      </ReactFlow>
    </ContextMenu>
  )
}