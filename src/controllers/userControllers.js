import User from "../models/Users";
import colors from 'colors';

export const getUser = async (req, res) =>{
    try {
        const user = await User.find();
        res.status(200).json({user});
    } catch (error) 
    {
        console.log(colors.red("ERROR GETTING USER"), error);
        res.status(500).json({message: "Error getting user"});

    }


};

export const createUser = async (req, res) =>{
 
    const user = req.body;

try {
        const newUser = new User (user);
        await newUser.save();
        const {_id} = newUser;
        res.status(200).json({_id});
    } catch (error) {
        console.log(colors.red("ERROR CREATING USER"), error);
        res.status(500).json({message: "Error creating user"});
    }
}
