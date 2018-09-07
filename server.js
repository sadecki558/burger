const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller.js");
const app = express();
var port = process.env.PORT || 3000;

app.use(express.static("public"));
//app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", routes);
app.use("/submitBurger", routes);
app.use("/clear", routes);

app.listen(port); 