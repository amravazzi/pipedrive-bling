'use strict'

const mongoose = require('mongoose')
const uri = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false'
const db = mongoose.createConnection(uri)
const Schema = mongoose.Schema

const testSchema = new Schema({
  name: String,
  age: Number
})

const Test = db.model('test', testSchema)

const test = new Test({ name: 'Billy', age: 31 })

db.once('connected', function (err) {
  if (err) { return console.error(err) }
  Test.create(test, function (err, doc) {
    if (err) { return console.error(err) }
    console.log(doc)
    return db.close()
  })
})