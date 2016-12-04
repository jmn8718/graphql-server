const typeDefinitions = `
type Test {
  id: String
  Test: String
}

type Query {
  test(id:String, Test:String): [Test]
}

schema {
  query: Query
}
`;

export default [typeDefinitions];
