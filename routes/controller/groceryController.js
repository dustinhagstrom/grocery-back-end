const Grocery = require("../model/Grocery");

let getAllGroceries = async function (req, res) {
  try {
    let foundGroceries = await Grocery.find({});
    res.json({ message: "success", payload: foundGroceries });
  } catch (e) {
    res.status(500).json({ message: e.message, error: e });
  }
};

let sortGroceryByDate = async function (req, res) {
  try {
    let sort = req.query.sort;
    let sortOrder = sort === "desc" ? -1 : 1;
    let foundGrocery = await Grocery.find({}).sort({ Date: sortOrder });
    res.json({ payload: foundGrocery });
  } catch (e) {
    res.status(500).json({ message: e.message, error: e });
  }
};

let sortGroceryByPurchased = async function (req, res) {
  try {
    let purchased = req.query.purchased;
    let isPurchasedOrder = purchased === "true" ? true : false;
    let sortByDate = req.query.sort ? req.query.sort : null;
    let finalSort;
    if (!sortByDate) {
      finalSort = null;
    } else {
      finalSort = sortByDate === "asc" ? 1 : -1;
    }
    let foundGrocery = await Grocery.find({ purchased: isPurchasedOrder }).sort(
      {
        Date: finalSort,
      }
    );
    res.json({ payload: foundGrocery });
  } catch (e) {
    res.status(500).json({ message: e.message, error: e });
  }
};

let createNewGrocery = async function (req, res) {
  let { grocery } = req.body;
  try {
    let newGroceryItem = await new Grocery({
      grocery: grocery,
    });
    let savedGroceryItem = await newGroceryItem.save();
    res.json({ message: "success", payload: savedGroceryItem });
  } catch (e) {
    res.status(500).json({ message: e.message, error: e });
  }
};

let updateGrocerybyID = async function (req, res) {
  let { id } = req.params;
  let { grocery, purchased } = req.body;
  try {
    let updatedGrocery = await Grocery.findByIdAndUpdate(
      { _id: id },
      { grocery: grocery, purchased: purchased },
      {
        new: true,
      }
    );
    res.json({ message: "success", payload: updatedGrocery });
  } catch (e) {
    res.status(500).json({ message: e.message, error: e });
  }
};

let updateGroceryWords = async function (req, res) {
  try {
    let updatedGroceryWords = await Grocery.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ payload: updatedGroceryWords });
  } catch (e) {
    res.status(500).json({ message: e.message, error: e });
  }
};

let updateGroceryPurchased = async function (req, res) {
  try {
    let updatedGroceryPurchase = await Grocery.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ payload: updatedGroceryPurchase });
  } catch (e) {
    res.status(500).json({ message: e.message, error: e });
  }
};

let deleteGrocerybyID = async function (req, res) {
  let { id } = req.params;
  try {
    let deletedGrocery = await Grocery.findByIdAndRemove({ _id: id });
    res.json({ message: "success", payload: deletedGrocery });
  } catch (e) {
    res.status(500).json({ message: e.message, error: e });
  }
};

module.exports = {
  getAllGroceries,
  createNewGrocery,
  updateGrocerybyID,
  deleteGrocerybyID,
  updateGroceryWords,
  updateGroceryPurchased,
  sortGroceryByDate,
  sortGroceryByPurchased,
};
