import useGraphEditorStore from "@/store/useGraphEditorStore"
import { getBezierPath } from "@xyflow/react"
import { useEffect } from "react"

export default function Edge({ 
  id, 
  sourceX, 
  sourceY, 
  sourcePosition,
  target,
  targetX, 
  targetY,
  targetPosition,
}) {
  const { startTargetId, setStartNodePosition } = useGraphEditorStore()
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition
  })

  useEffect(() => {
    if (target === startTargetId) {
      setStartNodePosition({ x: targetX, y: targetY })
    }
  }, [startTargetId, setStartNodePosition, target, targetX, targetY])

  return (
    <g id={id}>
      <path 
        fill="none"
        stroke="#fff"
        strokeWidth={2}
        d={edgePath}
      />
    </g>
  )
}