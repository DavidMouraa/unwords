import Item from "./Item"

export default function RenderItems({ item, layer }) {
  return (
    <Item
      item={item}
      layer={layer}
    />
  )
}