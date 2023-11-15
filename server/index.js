import express from "express";
import cors from "cors";
import mongoose from "mongoose";
// const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/PortfolioBuilder", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to DB");
}).catch((err) => {
  console.error("Error connecting to DB:", err);
});

// User schema
const userSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  cpassword: String,
  profession: String,
  phonenumber: String,
  username: String
});

const User = new mongoose.model("User", userSchema);

// Routes
app.post("/Login", (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username: username })
    .then((user) => {
      if (user) {
        if (password === user.password) {
          res.send({ message: "login success", user: user });
        } else {
          res.send({ message: "wrong credentials" });
        }
      } else {
        res.send("Not registered");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
});

app.post("/Register", (req, res) => {
  console.log(req.body);
  const { username,fullname, email, password , cpassword , phonenumber , profession} = req.body;
  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        res.send({ message: "user already exists" });
      } else {
        const newUser = new User({ username,fullname, email, password , cpassword , phonenumber , profession});
        newUser.save()
          .then(() => {
            res.send({ message: "registration successful" });
          })
          .catch((err) => {
            console.error(err);
            res.status(500).send("Internal Server Error");
          });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
});

app.listen(6969, () => {
  console.log("Server is running at port 6969");
});
