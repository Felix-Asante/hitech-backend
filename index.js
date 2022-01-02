const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
// ! PORT
const PORT = process.env.PORT || 8000;
// *=============MIDDLEWARE==========
app.use(cors());
app.use(express.json({ limit: "50mb" }));
// app.use(express.bodyParser({ limit: "50mb" }));
// app.use(express.urlencoded());
// *===============ROUTES============
app.use("/category", require("./routes/category"));
app.use("/product", require("./routes/product"));
// *===============SERVER SETUP======
app.listen(PORT, () => console.log("server running..."));
// *============CONNECT TO MONGODB===
// mongoose.set('bufferCommands', false);

mongoose.connect(
	"mongodb+srv://felix:ventures4@project.jqnrn.mongodb.net/Hitech?retryWrites=true&w=majority",
	() => console.log("connected to DB")
);
mongoose.connection.on("error", (err) => console.log(err));
