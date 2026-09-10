import Pin from "../../pins/Pin"

export default function Choice({ nodeId, choice }) {
  return (
    <div 
      className="flex items-center gap-1 w-full rounded-sm px-1 hover:bg-primary-500"
    >
      <div className="w-full truncate">
        <span className="w-full">
          {choice.label}
        </span>
      </div>
      <div>
        <Pin 
          id={choice.id}
          type={"source"}
          position={"right"}
        />
      </div>
    </div>
  )
}