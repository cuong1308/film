const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const path = require("path");
const app = express();
const port = 3001;
const axios = require("axios");
const dotenv = require('dotenv');


app.use(cookieParser())
dotenv.config({path: 'src/.env'})

const route = require("./routes");
const { insertDataFromApiToMongoDB } = require("./config/db");

const db = require('./config/db')
db.connect()

//insertDataFromApiToMongoDB(`https://api.themoviedb.org/3/movie/popular?api_key=3a26bb11393110f07519c6cd79b223c8&language=vi&page=1`, 'movies')

// app.get("/", (req, res) => {
//   res.render('home');
// });
app.get("/search", (req, res) => {
  res.render('search');
});


app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "resources/views"));

route(app);




// const fetchMovies = async (page) => {
//   try {
//     let result;
//     await axios
//       .get(
//         `https://api.themoviedb.org/3/movie/popular?api_key=3a26bb11393110f07519c6cd79b223c8&language=vi&page=${page}`
//       )
//       .then((response) => {
//         result = response.data.results;
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// };

// app.get("/movies", async (req, res, next) => {
//   try {
//     const { page } = req.query;
//     const data = await fetchMovies(page);

//     return res.status(200).json({
//       status: 200,
//       data,
//     });
//   } catch (err) {
//     return next(err);
//   }
// });

const fetchTrends = async (page) => {
  try {
    let result;
    await axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=3a26bb11393110f07519c6cd79b223c8&language=vi&page=${page}`
      )
      .then((response) => {
        result = response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });
    return result;
  } catch (error) {
    console.error(error);
  }
};

app.get("/trends", async (req, res, next) => {
  try {
    const { page } = req.query;
    const data = await fetchTrends(page);

    return res.status(200).json({
      status: 200,
      data,
    });
  } catch (err) {
    return next(err);
  }
});

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
