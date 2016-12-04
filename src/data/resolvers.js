import { Test, Todo } from './connectors';

const resolveFunctions = {
  Query: {
    tests(root, args) {
      const query = {};
      if (args.id) {
        query['identifiers.build_serial'] = args.id;
      }
      return new Promise((resolve, reject) => {
        Test.find(query, (err, tests) => {
          if (err) {
            reject(err)
          }
          resolve(tests)
        })
      })
    },
    todos(root, args) {
      return new Promise((resolve, reject) => {
        Todo.find({}, (err, todos) => {
          if (err) {
            reject(err)
          }
          resolve(todos)
        })
      })
    }
  }
}

export default resolveFunctions;
