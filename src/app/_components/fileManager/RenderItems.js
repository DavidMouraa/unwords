import FILES_MAP from "@/app/_constants/maps/filesMap"

export default function RenderItems({ itemId, items }) {
  const item = items[itemId]
  const FileComponent = FILES_MAP[item.type]

  return (
    <FileComponent 
      itemId={itemId}
    />
  )
}