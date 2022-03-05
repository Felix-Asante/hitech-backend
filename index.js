const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
require("dotenv").config();
const MongoStore = require("connect-mongo");

const Category = require("./models/categories");
// ! PORT
const PORT = process.env.PORT || 8000;
// *=============MIDDLEWARE==========
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(
	session({
		name: "sid",
		path: "/",
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
		// store: MongoStore.create({
		// 	mongoUrl: process.env.MONGODB_URI,
		// 	// ttl: 120 * 24 * 60 * 60,
		// }),
		cookie: {
			maxAge: 120 * 24 * 60 * 60 * 1000,
			secure: false,
		},
	})
);
// app.use(express.bodyParser({ limit: "50mb" }));
// app.use(express.urlencoded());
// *===============ROUTES============
app.use("/category", require("./routes/category"));
app.use("/product", require("./routes/product"));
// *===============SERVER SETUP======

app.listen(PORT, () => console.log("server running..."));
// *============CONNECT TO MONGODB===
// mongoose.set('bufferCommands', false);

mongoose.connect(process.env.MONGODB_URI, () => console.log("connected to DB"));
mongoose.connection.on("error", (err) => console.log(err));

// !root route
app.get("/", (req, res) => {
	Category.aggregate([
		{
			$lookup: {
				from: "products",
				localField: "_id",
				foreignField: "categoryId",
				as: "data",
			},
		},
	])
		.then((result) => {
			res.json(result);
		})
		.catch((err) => {
			res.json({ error: err });
		});
});
