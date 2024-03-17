const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/movieApp');

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number
})

const Movie = mongoose.model('Movie', movieSchema);

const amadeus = new Movie({title: "Amadeus", year: 1984});

Movie.insertMany([
    {title: "Amelie", year: 2001},
    {title: "Alien", year: 1979}
 ])

