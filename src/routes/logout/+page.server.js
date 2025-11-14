import { error, redirect } from '@sveltejs/kit';
import { lucia } from '$lib/server/auth';

export const actions = {
    default: async ({ locals, cookies }) => {
        if (!locals.session) {
            return redirect(302, "/login");
        }
        try {
            await lucia.invalidateSession(locals.session.id);

            const sessionCookie = lucia.createBlankSessionCookie();
            cookies.set(sessionCookie.name, sessionCookie.value, {
                path: ".",
                ...sessionCookie.attributes
            });
        } catch (e) {
            console.error("Fehler beim Logout", e);
            return error(500, "Logout Fehler");
        }
        return redirect(302, '/login');
    }
}