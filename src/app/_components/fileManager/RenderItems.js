import FILES_MAP from "@/app/_constants/filesMap"

export default function RenderItems({ id, items }) {
  const item = items[id]
  const FileComponent = FILES_MAP[item.type]

  return (
    <FileComponent 
      id={id}
    />
  )
}