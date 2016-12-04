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

type Query {
  test(id:String, type:String): [Test]
}

schema {
  query: Query
}
`;

export default [typeDefinitions];
