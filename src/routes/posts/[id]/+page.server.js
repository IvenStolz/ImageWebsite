import { PostModel } from '$lib/server/adapter';
import connectDB from '$lib/server/db';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
    connectDB();
    const id = params.id;
    const post = await PostModel.findById(params.id).populate('user');

    if (!post) {
        throw error(404, "Post not found");
    }

    return {
        post: JSON.parse(JSON.stringify(post))
    };
};