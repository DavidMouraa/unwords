'use client'

import { 
  ReactFlow,
  Background,
  useReactFlow
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"
import TextNode from "./nodes/TextNode"
import ContextMenu from "../../contextMenu/ContextMenu"
import useNodesStore from "@/store/useNodesStore"
import useGraphEditorStore from "@/store/useGraphEditorStore"

const nodeTypes = {
  text: TextNode,
}

export default function GraphEditor() {
  const { 
    nodes, 
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
  } = useNodesStore()
  const { setClientPos } = useGraphEditorStore()
  const { screenToFlowPosition } = useReactFlow()

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
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onPaneContextMenu={onPaneContextMenu}
        nodeTypes={nodeTypes}
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