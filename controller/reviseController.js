import { application } from "express";
import { CallModel } from "../models/reviseModel.js";

export const getCalls = async (req, res) => {
  try {
    // const call = new CallModel({
    //   id: 1,
    //   email: "giabao@gmail.com",
    //   password: "123458",
    //   address: "Huế",
    //   status: false,
    // });

    // call.save();

    // const calls = await CallModel.find();
    // console.log("calls", calls);
    // res.status(200).json(calls);
    // const cau1 = await CallModel.find().where("address").equals("Đà Nẵng");
    // res.status(200).json(cau1);
    const cau2 = await CallModel.find({
      password: { $exists: true },
      $expr: { $gt: [{ $strLenCP: "$password" }, 6] },
    });
    res.status(200).json(cau2);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createCalls = (req, res) => {
  res.send("Create Success");
};
