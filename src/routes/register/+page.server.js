import { lucia } from "$lib/server/auth";
import { fail, redirect } from "@sveltejs/kit";
import { generateIdFromEntropySize } from "lucia";
import { hash } from "@node-rs/argon2";
import { User } from "$lib/server/adapter.js";

export const actions = {
    default: async ({ request, cookies }) => {
        const formData = await request.formData();
        const username = formData.get('username')?.toString();
        const password = formData.get("password")?.toString();

        console.log(username);

        // @ts-ignore
        if (!username || username?.length < 3) {
            return fail(400, { message: "Ungültiger Benutzername" });
        }
        if (!password || password.length < 8) {
            return fail(400, { message: "Ungültiges Passwort" });
        }

        // Check if username already exists
        const existingUser = await User.findOne({ username: username });
        if (existingUser) {
            return fail(400, { message: "Dieser Benutzername existiert bereits" });
        }

        const userId = generateIdFromEntropySize(10);

        const hashedPassword = await hash(password, {
            memoryCost: 19456,
            timeCost: 2,
            outputLen: 32,
            parallelism: 1
        });

        const newUser = await User.create({
            _id: userId,
            username: username,
            hashedPassword: hashedPassword
        });

        console.log(newUser);

        const session = await lucia.createSession(userId, {});
        const sessionCookie = lucia.createSessionCookie(session.id);
        cookies.set(sessionCookie.name, sessionCookie.value, {
            path: ".",
            ...sessionCookie.attributes
        });

        return redirect(302, '/profile');
    }
}