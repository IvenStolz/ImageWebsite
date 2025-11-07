import { Lucia } from "lucia";
import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";
import mongoose from "mongoose";

const User = mongoose.model("User",
    new mongoose.Schema({
        _id: { type: String, required: true },
        username: { type: String, required: true },
        hashedPassword: { type: String, required: true }
    }));

const Session = mongoose.model("Session",
    new mongoose.Schema({
        _id: { type: String, required: true },
        user_id: { type: String, required: true },
        expires_at: { type: Date, required: true }
    }));

export const adapter = new MongodbAdapter(
    mongoose.connection.collection("sessions"),
    mongoose.connection.collection("users")
)

