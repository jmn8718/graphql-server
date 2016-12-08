import db from '../src/db';
import { Test } from '../src/data/connectors'

Test.aggregate([
  { $group: {
    _id: "$identifiers.build_serial",
    dataY: {
      $push: "$results.percentage"
    },
    dataX: {
      $push: "$results.time_stamp"
    }
  }}
], (err, data) => console.log(err, data))
