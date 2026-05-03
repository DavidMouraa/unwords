'use client'

import { 
  ReactFlow,
  Background,
  useReactFlow
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"
import TextNode from "./nodes/TextNode"
import StartNode from "./nodes/StartNode"
import ContextMenu from "../../contextMenu/ContextMenu"
import useGraphEditorStore from "@/store/useGraphEditorStore"
import useFileManagerStore from "@/store/useFileManagerStore"
import buildNode from "@/app/_utils/buildNode"
import ConnectionLine from "./edges/ConnectionLine"
import Edge from "./edges/Edge"

const nodeTypes = {
  start: StartNode,
  text: TextNode,
}

const edgeTypes = {
  execute: Edge,
}

export default function GraphEditor() {
  const { 
    clientPos,
    setClientPos,
  } = useGraphEditorStore()
  const { 
    screenToFlowPosition,
  } = useReactFlow()
  const { 
    items, 
    activedFileId,
    draggingItemId,
    setFileNodes,
    onNodesChange,
    onEdgesChange,
    onConnect,
    onReconnect,
  } = useFileManagerStore()

  const fitViewOptions = {
    padding: 2,
  }
  
  const activedFile = items[activedFileId]
  const contextMenuItemKeys = ["createTextNode"]

  function getClientPos(event) {
    return screenToFlowPosition({
      x: event.clientX,
      y: event.clientY,
    })
  }
  
  function onPaneContextMenu(event) {
    setClientPos(getClientPos(event))
  }

  function onDragOver(event) {
    event.preventDefault()

    setClientPos(getClientPos(event))
  }

  function onDrop(event) {
    event.stopPropagation()

    const draggingItem = items[draggingItemId]
    const newNode = buildNode(draggingItem.type, clientPos)

    newNode.data.fileId = draggingItem.id

    setFileNodes(newNode)
  }

  return (
    <ContextMenu
      itemKeys={contextMenuItemKeys}
    >
      <ReactFlow
        className='text-xs'
        nodes={activedFile.data.nodes}
        edges={activedFile.data.edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onReconnect={onReconnect}
        onPaneContextMenu={onPaneContextMenu}
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        connectionLineComponent={ConnectionLine}
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