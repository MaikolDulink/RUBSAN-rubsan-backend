import Employeds from "../models/Employeds";
import colors from "colors";

export const getEmployeds = async (req, res) => {

  try {

    const employeds = await Employeds.find();

    res.status(200).json({ employeds });

  } catch (error) {

    console.log(colors.red("ERROR GETTING EMPLOYEDS \n"), error);

    return res.status(500).json({ message: "Error getting employeds" });

  }

};

export const createEmployed = async (req, res) => {

  const employed = req.body;

  try {

    const createdEmployed = new Employeds(employed);

    await createdEmployed.save();

    const { _id } = createdEmployed;

    res.status(200).json({ _id });

  } catch (error) {

    console.error(colors.red("ERROR CREATING EMPLOYED: \n"), error);

    return res.status(500).json({ message: "Error creating employed" });

  }

};
