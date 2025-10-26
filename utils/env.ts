import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

export const ENV = {
  baseUrl: process.env.BASE_URL || "https://www.saucedemo.com/",
  testomatApiKey: process.env.TESTOMATIO || "",
};
