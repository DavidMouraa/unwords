import Pin from "../../pins/Pin"


export default function Choice({ choice }) {
  return (
    <div 
      className="flex items-center w-full rounded-sm hover:bg-primary-500 py-[1px] px-1"
    >
      <span className="w-full truncate">
        {choice.label}
      </span>
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