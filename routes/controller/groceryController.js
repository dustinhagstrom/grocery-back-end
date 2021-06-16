const Grocery = require("../model/Grocery");

let getAllGroceries = async function (req, res) {
  try {
    let foundGroceries = await Grocery.find({});
    res.json({ message: "success", payload: foundGroceries });
  } catch (e) {
    res.status(500).json({ message: e.message, error: e });
  }
};

let createNewGrocery = async function (req, res) {
  let { grocery } = req.body;
  try {
    //TODO
    //get the new grocery item from req.body.grocery
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
};
