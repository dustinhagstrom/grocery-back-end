const express = require("express");
const router = express.Router();

const {
  getAllGroceries,
  createNewGrocery,
  updateGrocerybyID,
  deleteGrocerybyID,
} = require("./controller/groceryController");

/* GET home page. */
router.get("/get-all-groceries", getAllGroceries);

router.post("/create-grocery", createNewGrocery);

router.put("/update-grocery-by-id/:id", updateGrocerybyID);

router.delete("/delete-grocery-by-id/:id", deleteGrocerybyID);

module.exports = router;
