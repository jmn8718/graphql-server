import mongoose from 'mongoose';

import db from '../db'
const Schema = mongoose.Schema;

const TestSchema = new Schema({
  Test: String,
  identifiers: {
    build_serial: String,
    device_model: String,
  },
  results: {
    healt: String,
    percentage: Number,
    plugged: String,
    temperature: String,
    time_stamp: String,
    voltage: String
  }
})

const Test = mongoose.model('Test', TestSchema)

export { Test };
