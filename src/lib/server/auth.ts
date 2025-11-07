import { Lucia } from "lucia";
import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";
import { dev } from "$app/environment";
import { adapter } from "./adapter";
import connectDB from './db';

await connectDB;

export const lucia = new Lucia(adapter, {
    sessionCookie: {
        attributes: {
            secure: !dev
        }
    }
})

declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
	}
}