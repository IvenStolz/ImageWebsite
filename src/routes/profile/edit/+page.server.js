import { User } from '$lib/server/adapter';
import connectDB from '$lib/server/db';
import { error, redirect } from '@sveltejs/kit';
import fs from 'fs/promises';
import crypto from 'crypto';

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
    default: async ({ request, locals }) => {
        const formData = await request.formData();
        const bio = formData.get("bio");
        const imageFile = formData.get("image");

        let updateData = {};

        updateData.bio = bio;

        if (imageFile && imageFile instanceof File) {
            const buffer = Buffer.from(await imageFile.arrayBuffer());
            const fileExtension = imageFile.name.split(".").pop();
            const uniqueFilename = `${crypto.randomUUID()}.${fileExtension}`;

            const filePath = `static/profilePictures/${uniqueFilename}`;
            const publicFilePath = `/profilePictures/${uniqueFilename}`;

            try {
                await fs.writeFile(filePath, buffer);
                updateData.profilePictureUrl = publicFilePath;
            } catch (e) {
                console.error("File could not be saved", e);
                throw error(500, "File could not be saved");
            }
        }

        await connectDB();
        await User.findByIdAndUpdate(locals.user?.id, { $set: updateData });

        // @ts-ignore
        return redirect(302, `/profile/${locals.user.username}`);
    }
};