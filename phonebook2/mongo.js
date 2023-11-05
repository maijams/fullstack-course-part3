const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URI)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name: "Name",
  number: "Number",
})

person.save().then(result => {
  //console.log(`added ${name} number ${number} to phonebook`)
  mongoose.connection.close()
})

Person.find({}).then(result => {
  console.log("phonebook:")
  result.forEach(person => {
    console.log(person.name, person.number)
  })
  mongoose.connection.close()
})