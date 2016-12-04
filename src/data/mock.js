const mocks = {
  Query: () => ({
    test: (root, args) => {
      return { id: args.id, type: args.type };
    },
  }),
  Test: () => ({ id: "fake", type: "fake" }),
};

export default mocks;
