import useVariableStore from "@/store/useVariablesStore"

export default function ConditionalSelectField({ type }) {
  const { variables } = useVariableStore()

  const operators = ["=", ">", "<", "=>", "=<"]

  return (
    <select 
      className="p-1 rounded-sm bg-primary-400"
    >
      <option>
        ---
      </option>
      {
        type === "operator" ? (
          <>
            {Object.values(operators).map((operator, index) => (
              <option 
                key={index}
                value={operator}
              >
                {operator}
              </option>
            ))}
          </>
        ) : (
          <>
            {Object.values(variables).map((variable) => (
              <option 
                key={variable.id}
                value={variable.id}
              >
                {variable.label}
              </option>
            ))}
          </>
        )
      }
    </select>
  )
}