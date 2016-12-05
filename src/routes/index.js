import express  from 'express';
const router = express.Router();

import { Test } from '../data/connectors';

/* GET home page. */
router.get('/', (req, res, next) => {
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
  ], (err, results) => {
    if (err) {
      next(err)
    }
    const series = results.map((test) => {
      const data = []
      for(let i = 0; i < test.dataX.length; i += 1) {
        const x = parseInt(test.dataX[i], 10)
        const y = test.dataY[i]
        if (x && y && x !== null && y !== null) {
          data.push([x, y])
        }
      }
      return {
        name: test._id,
        data,
      }
    });
    res.render('graph', { title: 'SERVER', series: series });
  })
});

export default router;
