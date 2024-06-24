import mongoose, { Schema } from "mongoose";

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
    }
}, // This closing brace was incorrectly placed
{ timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema); // Corrected models.User to mongoose.models.User

export default User;