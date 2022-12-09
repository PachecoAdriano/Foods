const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const app = express();

const FoodModel = require("./models/Food");

app.use(express.json());
app.use(cors())

mongoose.connect(
  "mongodb+srv://Adriano:759378@crud.jpc0r7v.mongodb.net/food?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.post("/insert", async (req, res) => {

  const foodName = req.body.foodName
  const days = req.body.days

  const food = new FoodModel({
    foodName: foodName,
    daysSinceIAte: days,
  });

  try {
    food.save();
    res.send("inserted data");
  } catch (error) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001...");
});
