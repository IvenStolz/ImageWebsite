import { Lucia } from "lucia";
import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    username: { type: String, required: true, unique: true},
    hashedPassword: { type: String, required: true },
    bio: {type: String},
    profilePictureUrl: {type: String, default: "/profilePictureDefaultImg.png"}
});

const SessionSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    user_id: { type: String, required: true },
    expires_at: { type: Date, required: true }
});

const PostSchema = new mongoose.Schema({
    title: { type: String, required: true},
    caption: { type: String },
    imageUrl: { type: String, required: true },
    hashtags: [{ type: String }],
    user: { type: String, ref: 'User', required: true },
    creationDate: {type: Date, default: Date.now }
})

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
export const Session = mongoose.models.Session || mongoose.model("Session", SessionSchema);
export const PostModel = mongoose.models.Post || mongoose.model("Post", PostSchema);

export const adapter = new MongodbAdapter(
    mongoose.connection.collection("sessions"),
    mongoose.connection.collection("users")
)

