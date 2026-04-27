import { 
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from "@xyflow/react";
import { create } from "zustand";

const useNodesStore = create((set) => ({
  nodes: [],
  edges: [],

  setNodes: (node) => set((state) => ({
    nodes: typeof node === "function" ? node(state.nodes) : [...state.nodes, node]
  })),

  setEdges: (edge) => set((state) => ({
    edges: typeof edge === "function" ? edge(state.edges) : [...state.edges, edge]
  })),

  onNodesChange: (changes) => set((state) => ({
    nodes: applyNodeChanges(changes, state.nodes)
  })),

  onEdgesChange: (changes) => set((state) => ({
    edges: applyEdgeChanges(changes, state.edges)
  })),

  onConnect: (params) => set((state) => ({
    edges: addEdge(params, state.edges)
  })),
}))

export default useNodesStore