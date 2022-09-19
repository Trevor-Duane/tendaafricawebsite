import Users from "../models/userModel.js";
import bcrypt from "bcrypt";
 
export const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll({
            // attributes:['id','username','email']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}
 
export const Register = async(req, res) => {
    const { username, email, password   } = req.body;
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Users.create({
            username: username,
            email: email,
            password: hashPassword
        });
        res.json({msg: "Registration Successful"});
    } catch (error) {
        console.log(error);
    }
}


export const Login = async(req, res) => {
    const {email, password} = req.body
    try {
        const user = await Users.findOne({
            where:{
                email: req.body.email,
            }
        });
        res.json(user);
        console.log(user)
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if(match){
    
               return res.send(req.session.user);
        }
        if(!match) return res.status(400).json({msg: "Wrong Password"});
       
    } catch (error) {
        res.status(404).json({msg:"Email not found"});
    }
}
 
export const confirmLogin = async(req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
      } else {
        res.send({ loggedIn: false });
      }
}
 
