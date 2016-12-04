import express  from 'express';
const router = express.Router();

import { Test } from '../data/connectors';

/* GET home page. */
router.get('/', (req, res, next) => {
  Test.find({}, (err, data) => {
    console.log(err, data)
    if (err) {
      next(err)
    }
    res.render('graph', { title: 'SERVER', data: data });
  })
});

export default router;
