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
    outputs: [
      {
        id: null,
        type: "source",
      }
    ],
  }
}

export default NODE_TEMPLATES