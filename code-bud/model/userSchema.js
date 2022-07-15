const jwt=require('jsonwebtoken');
const mongoose=require('mongoose');
const bycrypt=require('bcryptjs');
//creating user schema
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:false
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
});

//hashing password
//pre func me do prameter denge ek to kis se pehle chalana hai i.e. save and second is callback function
//this keyword use kr rhe isliye arrow fun use nhi kiya
userSchema.pre('save',async function(next){
    console.log("hi");
    if(this.isModified('password')){
        this.password=await bycrypt.hash(this.password,12);
        this.cassword=await bycrypt.hash(this.cpassword,12);
    }
    next();
});
//we are generating token
//jwt.sign takes two parameter and those are payload and secret key
userSchema.methods.generateAuthToken=async function(){
    try{
        //generating token
        let token=jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;

    }catch(err){
        console.log(err);
    }
}

const user=mongoose.model("USER",userSchema);
module.exports=user;
