import useFileManagerStore from "@/store/useFileManagerStore"
import useGraphEditorStore from "@/store/useGraphEditorStore"


const SECTION_BUILDS_MAP = {
  text: (node) => {
    const { edges } = useGraphEditorStore.getState()
    const { items } = useFileManagerStore.getState()

    const nextSection = edges.find((edge) => edge.source === node.id)?.targetHandle || null
    
    const section = {
      id: node.id,
      type: "text",
      next: nextSection,
      data: {
        content: items[node.data.fileId].data.content
      }
    }

    return section
  },
  choice: (node) => {
    const { edges } = useGraphEditorStore.getState()

    const nodeEdges = edges.filter((edge) => edge.source === node.id)
    const nodeChoices = node.data.choices

    const sections = nodeEdges.map((edge) => {
      const choice = nodeChoices.find((choice) => choice.id === edge.sourceHandle)
      
      return {
        id: choice.id,
        type: "choice",
        next: edge.target,
      }
    })
    
    return sections
  }
}

export default SECTION_BUILDS_MAP