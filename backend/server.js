require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

// const multer = require("multer");
// const multerMid = multer({
//   storage: multer.memoryStorage(),
//   limits: {
//     fieldSize: 5 * 1024 * 1024,
//   },
// });

connectDB();

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
