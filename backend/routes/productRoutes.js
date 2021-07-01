const router = require("express").Router();

const {
  getAllProducts,
  getProductsById,
} = require("../controller/productControllers");

//@desc GET all products from db
//@route GET /api/products
router.get("/", (getAllProducts) => {});

//@desc GET a products by id from db
//@route GET /api/products/:id
router.get("/:id", (getProductsById) => {});

module.exports = router;
