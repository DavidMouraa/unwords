import useFileManagerStore from "@/store/useFileManagerStore"
import useGraphEditorStore from "@/store/useGraphEditorStore"


const SECTION_BUILDS_MAP = {
  text: (node) => {
    const { edges } = useGraphEditorStore.getState()
    const { items } = useFileManagerStore.getState()

    const nextSectionId = edges.find((edge) => edge.source === node.id)?.target || null
    
    const section = {
      id: node.id,
      type: "text",
      next: nextSectionId,
      data: {
        content: items[node.data.fileId]?.data.content || null
      }
    }

    return section
  },
  choice: (node) => {
    const { edges } = useGraphEditorStore.getState()

    const nodeEdges = edges.filter((edge) => edge.source === node.id)
    const nodeChoices = node.data.choices

    const section = {
      id: node.id,
      type: "choice",
      choices: nodeEdges.map((edge) => {
        const choice = nodeChoices.find((choice) => choice.id === edge.sourceHandle)
        
        return {
          id: choice.id,
          label: choice.label,
          next: edge.target,
        }
      }),
    }
    
    return section
  },
}

export default SECTION_BUILDS_MAP