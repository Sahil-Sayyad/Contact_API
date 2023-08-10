require("dotenv").config();
const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/mongoose");
const app = express();
const port = process.env.PORT || 5000;

connectDB();
//uploads folder for the storing the profile images.
app.use("./uploads", express.static("./uploads"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoute"));
app.use('/api/users' , require('./routes/userRoute'));
app.use(errorHandler);
//start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
