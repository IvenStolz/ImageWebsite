import connectDB from '$lib/server/db';
import { User } from '$lib/server/adapter';
import { error } from '@sveltejs/kit';
import { PostModel } from '$lib/server/adapter';

export async function load({params}) {
    await connectDB();

    const username = params.username;
    const profileUser = await User.findOne({ username: username });
    if (!profileUser) {
		throw error(404, 'User not found');
	}

    const posts = await PostModel.find({ user: profileUser._id.toString() }).sort({creationDate: -1}).populate('user')

    const userDataWOPassword = {
        id: profileUser._id.toString(),
        username: profileUser.username
    };

    return {
		profileUser: userDataWOPassword,
		posts: JSON.parse(JSON.stringify(posts))
	};
};