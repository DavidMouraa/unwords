import buildVariable from "@/app/_utils/buildVariable";
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
    state.variables = {...state.variables, [newVariable.id]: newVariable}
  }),

  renameVariable: (variableId, newLabel) => set((state) => {
    state.variables[variableId].label = newLabel
  }),

  changeVariableType: (variableId, newType) => set((state) => {
    state.variables[variableId].type = newType
    state.variables[variableId].data = buildVariable(newType).data
  }),

  setVariableValue: (variableId, newValue) => set((state) => {
    state.variables[variableId].data.value = newValue
  }),

  deleteVariable: (variableId) => set((state) => {
    delete state.variables[variableId]
  }),
})))

export default useVariableStore