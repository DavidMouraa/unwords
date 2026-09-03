import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const initialVariables = {
  stringVariable: {
    id: "stringVariable",
    label: "String",
    data: {
      value: "Olá, mundo!",
    }
  }
}

const useVariableStore = create(immer((set) => ({
  variables: initialVariables,

  addVariable: (newVariable) => set((state) => {
    state.variables = {...variables, [state.id]: newVariable}
  })
})))

export default useVariableStore