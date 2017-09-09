const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/nahs')

const userSchema = new mongoose.Schema({
  name: String,
  pass: String
})
const foodSchema = new mongoose.Schema({},{collection: 'food'})

const Models = {
  User: mongoose.model('User', userSchema),
  food: mongoose.model('food', foodSchema)
}
module.exports = Models
