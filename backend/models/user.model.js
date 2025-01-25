import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type:String,
        required:true,
    },
    username: {
        type:String,
        required:true,
        unique:true,
    },
    password: {
        type:String,
        required:true,
        minlength:8,
    },
    gender: {
        type:String,
        required:true,
        enum:["male", "female", "prefer not to say"],
    },
    profilePicture: {
        type:String,
        default:"",
    },
    // createdAt and updatedAt => Member since <createdAt>
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;