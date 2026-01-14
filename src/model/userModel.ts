import mongoose from "mongoose";

interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: "admin" | "user";
}

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true, minlength: 3 },
    lastName: { type: String, required: true, minlength: 3 },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, minlength: 6 },
    role: { type: String, required: true, enum: ["admin", "user"], default: "user" }
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;