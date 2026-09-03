import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const initialVariables = {
  stringVariable: {
    id: "stringVariable",
    type: "string",
    label: "String",
    data: {
      value: "Olá, mundo!",
    }
  },
  numberVariable: {
    id: "numberVariable",
    type: "number",
    label: "Number",
    data: {
      value: 0,
    }
  },
}

const useVariableStore = create(immer((set) => ({
  variables: initialVariables,

  addVariable: (newVariable) => set((state) => {
    state.variables = {...variables, [newVariable.id]: newVariable}
  })
})))

export default useVariableStore