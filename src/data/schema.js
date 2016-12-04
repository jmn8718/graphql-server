const typeDefinitions = `
type Identifier {
  device_model: String
  build_serial: String
}

type Result {
  healt: String
  percentage: Int
  plugged: String
  temperature: String
  time_stamp: String
  voltage: String
}

type Test {
  id: String
  Test: String
  identifiers: Identifier
  results: Result
}

type Todo {
  id: String
  text: String!
  complete: Boolean!
}

type Query {
  tests(id:String, type:String): [Test]
  todos: [Todo]
}

schema {
  query: Query
}
`;

export default [typeDefinitions];
