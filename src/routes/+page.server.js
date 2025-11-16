import connectDB from '$lib/server/db';
import { User } from '$lib/server/adapter';
import { error } from '@sveltejs/kit';
import { PostModel } from '$lib/server/adapter';

export async function load({ url }) {
    await connectDB();

    const sortParam = url.searchParams.get('sort') || 'newest';
    /**
     * @type {{ [key: string]: 1 | -1 }}
     */
    let sortQuery = {creationDate: -1};

    switch (sortParam) {
        case "oldest":
            sortQuery = { creationDate: 1 };
            break;
        case "titleAZ":
            sortQuery = { title: 1 };
            break;
        case "titleZA":
            sortQuery = { title: -1 };
            break;
    }

    let posts = await PostModel.find().sort(sortQuery).populate('user');

    return {
        posts: JSON.parse(JSON.stringify(posts)),
        currentSort: sortParam
    };
};