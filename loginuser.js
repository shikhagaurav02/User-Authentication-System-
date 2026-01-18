import user from "./models/user";

export const loginUser=async(req,res)=>{
    const{email,password}=req.body;
    const user=await user.findOne({email});
    if(!user){
        return res.status(400).json({message:"Invalid credentials"});

    }
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(400).json({message:"Invalid credentials"});
    }
    const token=JsonWebTokenError.sign(
        {id:user._id} ,
        process.env.Jwt_SECRET,
        {expiresIn:"1d"}
    );
    res.json({token});
};