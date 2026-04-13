import { Elysia } from "elysia";
import { db } from "./db";

const app = new Elysia()
  .get("/", () => ({
    status: "online",
    message: "Welcome to Learn-Vibe API",
    timestamp: new Date().toISOString()
  }))
  .get("/users", async () => {
    try {
      // Ini hanya contoh, akan error jika database belum aktif
      // const allUsers = await db.query.users.findMany();
      // return allUsers;
      return { message: "Database connection ready. Update .env to fetch data." };
    } catch (error) {
      return { error: "Database not connected" };
    }
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
