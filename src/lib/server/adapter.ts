import { Lucia } from "lucia";
import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    username: { type: String, required: true, unique: true},
    hashedPassword: { type: String, required: true }
});

const SessionSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    user_id: { type: String, required: true },
    expires_at: { type: Date, required: true }
});

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
export const Session = mongoose.models.Session || mongoose.model("Session", SessionSchema);

export const adapter = new MongodbAdapter(
    mongoose.connection.collection("sessions"),
    mongoose.connection.collection("users")
)

