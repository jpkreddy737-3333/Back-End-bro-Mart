const express = require("express");
const cors = require("cors");
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

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
