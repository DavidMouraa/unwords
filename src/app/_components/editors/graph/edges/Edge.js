import { getBezierPath } from "@xyflow/react"

export default function Edge({ 
  id, 
  sourceX, 
  sourceY, 
  sourcePosition,
  targetX, 
  targetY,
  targetPosition,
}) {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition
  })

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