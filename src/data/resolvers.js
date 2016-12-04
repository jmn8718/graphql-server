import { Test } from './connectors';

const resolveFunctions = {
  Query: {
    test(root, args) {
      const query = {};
      if (args.id) {
        query._id = args.id;
      }
      return new Promise((resolve, reject) => {
        Test.find(query, (err, results) => {
          console.log(err, results)
          if (err) {
            reject(err)
          }
          resolve(results)
        })
      })
    }
  }
}

export default resolveFunctions;
