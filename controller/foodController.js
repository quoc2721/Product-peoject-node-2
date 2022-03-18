import { FoodModel } from "../models/foodModel.js";

// Create Food
export const createFood = async (req, res) => {
  try {
    const newFood = req.body;
    const food = new FoodModel(newFood);
    await food.save();
    res.status(200).json(food);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
// Get Food
export const getFood = async (req, res) => {
  try {
    const foods = await FoodModel.find();
    console.log("foods", foods);
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// Get Food to Id
export const getFoodId = async (req, res) => {
  try {
    const foodID = await FoodModel.findById(req.params._id);
    res.status(200).json(foodID);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// Update Food
export const updateFood = async (req, res) => {
  try {
    const updateFood = req.body;
    const food = await FoodModel.findOneAndUpdate(
      { _id: updateFood._id },
      updateFood,
      { new: true }
    );
    res.status(200).json(food);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// Delete Food to Id

export const deleteFood = async (req, res) => {
  try {
    const data = req.body;
    const deleteFood = await FoodModel.deleteOne({ _id: data._id }, data, {
      new: true,
    });
    res.status(200).json(deleteFood);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
