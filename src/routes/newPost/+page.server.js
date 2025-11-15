import { error, redirect } from '@sveltejs/kit';
import { PostModel } from '$lib/server/adapter.js';
import connectDB from '$lib/server/db.js';
import fs from 'fs/promises';
import crypto from 'crypto';

export const actions = {
    default: async({ request, locals }) => {
        const formData = await request.formData();

        const title = formData.get("title");
        const caption = formData.get("caption");
        const hashtagsInput = formData.get("hashtags");
        const imageFile = formData.get("image");

        if (!(imageFile instanceof File)) {
			throw error(400, 'Invalid file type');
		}

        if (!locals.user) {
            throw error(400, "No user signed in");
        };
        if (!imageFile) {
            throw error(400, "No image file found");
        }
        if (!title) {
            throw error(400, "No title found");
        }

        const buffer = Buffer.from(await imageFile.arrayBuffer());
        const fileExtension = imageFile.name.split(".").pop();
        const uniqueFilename = `${crypto.randomUUID()}.${fileExtension}`;

        const filePath = `static/postImages/${uniqueFilename}`;
        const publicFilePath = `/postImages/${uniqueFilename}`;

        try {
            await fs.writeFile(filePath, buffer);
        } catch (e) {
            console.error("File could not be saved", e);
            throw error(500, "File could not be saved");
        }


        /**
         * @type {string[]}
         */
        let hashtags = [];
        if (typeof hashtagsInput === 'string' && hashtagsInput.length > 0) {
            hashtags = hashtagsInput.split(",").map((tag) => tag.trim().replaceAll(" ","")).filter((tag) => tag.length > 0);
        }

        await connectDB();

        const post = await PostModel.create({
            title: title,
            caption: caption,
            hashtags: hashtags,
            imageUrl: publicFilePath,
            user: locals.user.id
        });

        console.log(post);
        
        throw redirect(302, "/");
    }
}