const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const path = require("path");
const app = express();
const port = 3002;

const route = require("./src/routes");

const db = require('../admin/src/config/db')
db.connect()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('_method'))

app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);

app.use(express.static(path.join(__dirname, 'src/public')));

app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "src/resources/views"));

route(app);

app.get("/", (req, res) => {
  res.render('dashboard');
});

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
