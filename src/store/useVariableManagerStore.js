import { immer } from "zustand/middleware/immer";
import { create } from "zustand";

const initialVariables = {
  "string": {
    id: "string",
    type: "string",
    data: {
      label: "Cumprimento",
      value: "Olá, Mundo!",
    },
  },
  "number": {
    id: "number",
    type: "number",
    data: {
      label: "Tentativas",
      value: 666,
    },
  },
}

const useVariableManagerStore = create(immer((set) => ({
  variables: initialVariables,

  addVariable: (variable) => set((state) => {
    state.variables = {...state.variables, [variable.id]: variable}
  })
})))

export default useVariableManagerStore