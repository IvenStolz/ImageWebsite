import { User } from '$lib/server/adapter';
import connectDB from '$lib/server/db';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
    await connectDB();

    const query = url.searchParams.get("q");

    let foundUsers = [];

    if (query) {
        foundUsers = await User.find({
            username: { $regex: query, $options: "i"}
        })
    }

    const foundUsersWOPassword = foundUsers.map(user => ({
        id: user._id.toString(),
        username: user.username
    }));


    return {
        query: query,
        users: foundUsersWOPassword
    };
};