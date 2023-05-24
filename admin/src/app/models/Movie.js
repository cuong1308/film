const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Movie = new Schema(
  {
    id: { type: String, require: true, unique: true },
    title: { type: String, require: true, unique: true},
    original_title: { type: String, require: true, unique: true},
    genre_ids: { type: String },
    overview: { type: String },
    production_countries: { type: String},
    poster_path: { type: String },
    release_date: { type: Date },
    trailer: { type: String },
    video: { type: String },
    vote_average: { type: String },
    vote_count: { type: String },
    status: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", Movie);
