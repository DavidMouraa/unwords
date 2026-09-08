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
    state.variables = {...state.variables, newVariable}
  }),

  changeVariableType: (variableId, newType) => set((state) => {
    state.variables[variableId].data = buildVariable(newType).data
  }),

  deleteVariable: (variableId) => set((state) => {
    delete state.variables[variableId]
  }),
})))

export default useVariableStore