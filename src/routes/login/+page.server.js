import { error, redirect } from '@sveltejs/kit';
import { User } from '$lib/server/adapter.js';
import { verify } from '@node-rs/argon2';
import { lucia } from '$lib/server/auth.js';

export const actions = {
    default: async ({ request, cookies }) => {
        const formData = await request.formData();
        const username = formData.get("username")?.toString();
        const password = formData.get("password")?.toString();

        console.log(username + " | " + password);

        if (!username || !password) {
            return error(400, "Password or Username missing");
        }

        const existingUser = await User.findOne({ username: username });
        if (!existingUser) {
            return error(401, "Invalid Username or Password");
        }

        console.log(existingUser);

        const validPassword = await verify(existingUser.hashedPassword, password, {
            memoryCost: 19456,
            timeCost: 2,
            outputLen: 32,
            parallelism: 1
        });
        if (!validPassword) {
            return error(401, "Invalid Username or Password");
        }

        const newSession = await lucia.createSession(existingUser._id, {});
        const sessionCookie = lucia.createSessionCookie(newSession.id);

        cookies.set(sessionCookie.name, sessionCookie.value, {
            path: ".",
            ...sessionCookie.attributes
        });

        return redirect(302, "/");
    }
};