import { config } from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "prisma/config";

// Resolve the directory this config file lives in (server/)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Force-load server/.env no matter where Prisma runs from
config({ path: path.join(__dirname, ".env") });

const url = process.env.DATABASE_URL;

if (!url) {
  throw new Error(
    "DATABASE_URL is missing. Put it in server/.env or set it in your terminal environment."
  );
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: { path: "prisma/migrations" },
  datasource: {
    url,
  },
});
