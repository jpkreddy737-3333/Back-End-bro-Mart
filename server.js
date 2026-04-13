const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const UserRoute = require("./routes/userRoute");
const ProductRoute = require("./routes/productRoute");
const CartRoute = require("./routes/cartRoute");
const Authroute = require("./routes/authRoute");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", UserRoute);
app.use("/products", ProductRoute);
app.use("/cart", CartRoute);
app.use("/auth", Authroute);

mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 60000
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("Mongo Error:", err));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});