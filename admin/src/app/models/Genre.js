const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Genre = new Schema(
  { 
    id: { type: String, required: true, unique: true, maxLength: 255 },
    name: { type: String, required: true, unique: true, maxLength: 255 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Genre", Genre);