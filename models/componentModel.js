const mongoose = require('mongoose');

const icuSchema = new mongoose.Schema({
  name: String,
  totalBeds: Number,
  occupiedBeds: Number,
  reserveBeds: Number,
  availableBeds: Number,
  contact: String,
  updatedUser: String,
  updatedDate: String,
  updatedTime: String,
});


const Icu = mongoose.model('iculist', icuSchema);

module.exports = Icu;
