import { Test } from './connectors';

const resolveFunctions = {
  Query: {
    test(root, args) {
      const query = {};
      if (args.id) {
        query['identifiers.build_serial'] = args.id;
      }
      return new Promise((resolve, reject) => {
        Test.find(query, (err, tests) => {
          // console.log(err, tests)
          if (err) {
            reject(err)
          }
          resolve(tests)
        })
      })
    }
  }
}

export default resolveFunctions;
