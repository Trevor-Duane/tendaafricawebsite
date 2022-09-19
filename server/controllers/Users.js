import bcrypt from "bcrypt";
import User from "../models/userModel.js";

 
export const getUsers = async(req, res, next) => {
    let users;
    try{
        users = await User.findAll();
    }catch (err) {
        console.log(err);
    }
    if(!users){
        return res.status(404).json({message: "No Users found"})
    }
    return res.status(200).json({users} )

}

export const register = async(req, res, next) => {
    const {username, email, password } = req.body;

    let existingUser;
    
    try{
        existingUser = await User.findOne({
            where:{
                email: req.body.email,
            }
        })
    } catch(err) {
        console.log(err)
    }
    if(existingUser){
        return res.status(400).json({message: "User already exists, Login Instead"})
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt)
    try{
        await User.create({
            username,
            email,
            password: hashedPassword,
        });

    } catch (err) {
        console.log(err);
    }
    return res.status(201).json({message: "registration succesful"})
}

export const login = async(req, res, next) => {
    const { email, password } = req.body;

    let existingUser;
    
    try{
        existingUser = await User.findOne({
            where:{
                email: email,
            }
        });
    } catch (err) {
        console.log(err)
    }
    if(!existingUser){
        return res.status(404).json({message: "No user by this email"})
    }
    const passwordMatch = await bcrypt.compareSync(password, existingUser.password);

    if(!passwordMatch){
        return res.status(400).json({message: "Incorrect Password"})
    }
    return res.status(200).json([{message: "Login Successful"}, {existingUser}])



}