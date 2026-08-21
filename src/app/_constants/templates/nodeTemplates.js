const NODE_TEMPLATES = {
  text: {
    data: {
      fileId: null,
    },
    inputs: [
      {
        id: null,
        type: "target",
      }
    ],
    outputs: [
      {
        id: null,
        type: "source",
      }
    ],
  },
  choice: {
    data: {
      choices: [],
    },
    inputs: [
      {
        id: null,
        type: "target"
      },
    ],
    outputs: [],
  },
  conditional: {
    data: {
      conditions: [],
    },
    inputs: [
      {
        id: null,
        type: "target",
      }
    ],
    outputs: [],
  }
}

export default NODE_TEMPLATES