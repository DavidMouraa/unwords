'use client'

import { 
  ReactFlow,
  Background,
  useReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  reconnectEdge
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"
import TextNode from "./nodes/TextNode"
import ContextMenu from "../../contextMenu/ContextMenu"
import useGraphEditorStore from "@/store/useGraphEditorStore"
import useFileManagerStore from "@/store/useFileManagerStore"
import buildNode from "@/app/_utils/buildNode"
import ConnectionLine from "./edges/ConnectionLine"
import Edge from "./edges/Edge"
import StartNode from "./nodes/StartNode"
import { useEffect } from "react"
import { v4 as uuidv4 } from "uuid"

const nodeTypes = {
  text: TextNode,
  start: StartNode,
}

const edgeTypes = {
  execute: Edge,
  start: Edge,
}

export default function GraphEditor() {
  const { 
    nodes,
    edges, 
    clientPos, 
    setNodes, 
    setEdges, 
    setClientPos,
  } = useGraphEditorStore()
  const { screenToFlowPosition } = useReactFlow()
  const { items, draggingItemId } = useFileManagerStore()

  const contextMenuItemKeys = ["createTextNode"]

  const fitViewOptions = {
    padding: 1,
  }
  
  function getClientPos(event) {
    return screenToFlowPosition({
      x: event.clientX,
      y: event.clientY,
    })
  }

  function onNodesChange(changes) {
    setNodes((nodes) => applyNodeChanges(changes, nodes))
  }

  function onEdgesChange(changes) {
    setEdges((edges) => applyEdgeChanges(changes, edges))
  }
  
  function onConnect(params) {
    const newParams = {...params, id: uuidv4(), type: "execute"}

    if (params.target !== params.source) {
      setEdges((edges) => {
        const noDuplicateEdges = edges.filter((edge) => 
          !(edge.source === params.source && edge.sourceHandle === params.sourceHandle) && 
          !(edge.target === params.target && edge.targetHandle === params.targetHandle)
        )
  
        return addEdge(newParams, noDuplicateEdges)
      })
    }
  }

  function onReconnect(oldEdge, newConnection) {
    setEdges((edges) => reconnectEdge(oldEdge, newConnection, edges))
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

    setNodes({
      ...newNode,
      data: {
        ...newNode.data,
        fileId: draggingItem.id
      },
    })
  }

  return (
    <ContextMenu
      itemKeys={contextMenuItemKeys}
    >
      <ReactFlow
        className='text-xs'
        nodes={nodes}
        edges={edges}
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