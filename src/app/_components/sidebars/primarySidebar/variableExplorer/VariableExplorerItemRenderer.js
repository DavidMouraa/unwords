import VARIABLE_EXPLORER_ITEMS_MAP from "@/app/_constants/maps/variableExplorerItemsMap";

export default function VariableExplorerItemRenderer({ item }) {
  const VariableItemComponent = VARIABLE_EXPLORER_ITEMS_MAP[item.type]

  return (
    <VariableItemComponent 
      item={item}
    />
  )
}