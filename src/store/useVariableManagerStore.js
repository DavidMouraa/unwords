import { immer } from "zustand/middleware/immer";
import { create } from "zustand";
import buildVariable from "@/app/_utils/buildVariable";

const initialVariables = {
  "string": {
    id: "string",
    type: "string",
    label: "Cumprimento",
    data: {
      value: "Olá, Mundo!",
    },
  },
  "number": {
    id: "number",
    type: "number",
    label: "Tentativas",
    data: {
      value: 666,
    },
  },
}

const useVariableManagerStore = create(immer((set) => ({
  variables: initialVariables,

  addVariable: (variable) => set((state) => {
    state.variables = {...state.variables, [variable.id]: variable}
  }),

  renameVariable: (variableId, newLabel) => set((state) => {
    console.log(newLabel)
    state.variables[variableId].label = newLabel
  }),

  changeVariableType: (variableId, newType) => set((state) => {
    const newData = buildVariable(newType).data

    state.variables[variableId].type = newType
    state.variables[variableId].data = newData
  }),

  changeVariableValue: (variableId, newValue) => set((state) => {
    state.variables[variableId].data.value = newValue
  })
})))

export default useVariableManagerStore