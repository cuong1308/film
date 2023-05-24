const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Movie = new Schema(
  {
    title: { type: String, required: true, unique: true, maxLength: 255 },
    original_title: { type: String, unique: true, maxLength: 255 },
    genre_ids: { type: String },
    overview: { type: String, maxLength: 255 },
    production_countries: { type: String, maxLength: 255 },
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
