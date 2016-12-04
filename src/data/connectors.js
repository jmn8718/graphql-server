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

const TodoSchema = new Schema({
  text: String,
  complete: Boolean,
})

const Test = mongoose.model('Test', TestSchema)
const Todo = mongoose.model('Todo', TodoSchema)

export { Test, Todo };
