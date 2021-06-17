const express = require("express");
const router = express.Router();

const {
  getAllGroceries,
  createNewGrocery,
  updateGrocerybyID,
  deleteGrocerybyID,
  updateGroceryWords,
  updateGroceryPurchased,
} = require("./controller/groceryController");

/* GET home page. */
router.get("/get-all-groceries", getAllGroceries);

router.post("/create-grocery", createNewGrocery);

router.put("/update-grocery-by-id/:id", updateGrocerybyID);

router.put("/update-grocery-words/:id", updateGroceryWords);

router.put("/update-grocery-purchased/:id", updateGroceryPurchased);

router.delete("/delete-grocery-by-id/:id", deleteGrocerybyID);

module.exports = router;
