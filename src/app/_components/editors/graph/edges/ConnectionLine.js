import { getBezierPath } from "@xyflow/react"

export default function ConnectionLine({
  fromX,
  fromY,
  fromPosition,
  toX,
  toY,
  toPosition,
}) {
  const [edgePath] = getBezierPath({
    sourceX: fromX,
    sourceY: fromY,
    sourcePosition: fromPosition,
    targetX: toX,
    targetY: toY,
    targetPosition: toPosition,
  })

  return (
    <g>
      <path 
        fill="none"
        stroke="#fff"
        strokeWidth={2}
        d={edgePath}
      />
    </g>
  )
}