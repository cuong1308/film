const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const User = new Schema(
  { 
    name: { type: String, required: true, maxLength: 255 },
    username: { type: String, required: true, unique: true, maxLength: 255 },
    email: { type: String, required: true, unique: true, maxLength: 255 },
    password: { type: String, required: true, maxLength: 255},
    isAdmin: { type: Boolean, default: false},
  },
  { timestamps: true }
);

User.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);

  next();
});


module.exports = mongoose.model("User", User);