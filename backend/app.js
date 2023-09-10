const express = require("express");
const sequelize = require("./util/database");
const cors = require("cors");
const CandyInfo = require("./models/candyInfo");
const errorController = require('./controllers/error')

const app = express();
app.use(cors());
app.use(express.json());

const sellerRoutes = require('./routes/seller');

app.use("/seller", sellerRoutes);

app.use(errorController.get404);

sequelize
  .sync()
  .then((result) => app.listen(4000))
  .catch((err) => console.log(err));
