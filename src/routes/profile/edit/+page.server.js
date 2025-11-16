import { User } from '$lib/server/adapter';
import connectDB from '$lib/server/db';
import { error } from '@sveltejs/kit';

export async function load({ locals }) {
    await connectDB();

    const currentUser = await User.findById(locals.user?.id);
    if (!currentUser) {
        return error(404, "User not found");
    }

    return {
        currentUser: {
            bio: currentUser.bio,
            profilePictureUrl: currentUser.profilePictureUrl
        }
    };
};

export const actions = {
    default: async({ request, locals }) => {
        
    }
};