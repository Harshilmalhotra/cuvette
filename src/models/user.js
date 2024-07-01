import mongoose, { Schema } from "mongoose";
const japplySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
  
    
  });

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    japply:[japplySchema]
}, 
{ timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema); // Corrected models.User to mongoose.models.User

export default User;