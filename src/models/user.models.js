import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        trim: true  
    },
    email : {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password : {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{
        timestamps: true
})

export default mongoose.model("User", userSchema)