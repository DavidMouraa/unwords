import ConditionalSelectField from "./ConditionalSelectField";

export default function ConditionalField() {
  return (
    <div
      className="flex flex-col items-start gap-1 p-2 bg-primary-600 rounded-sm"
    >
      <ConditionalSelectField 
        type={"variable"}
      />
      <ConditionalSelectField 
        type={"operator"}
      />
      <ConditionalSelectField 
        type={"variable"}
      />
    </div>
  )
}