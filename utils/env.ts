import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

export const ENV = {
  uiBaseUrl: process.env.UI_BASE_URL || "https://www.saucedemo.com/",
  apiBaseUrlReqres: process.env.API_BASE_URL || "https://reqres.in/api/",
  apiBaseUrlJsonPlaceHolder:
    process.env.API_BASE_URL_JSON_PLACE_HOLDER || "https://reqres.in/api/",

  testomatApiKey: process.env.TESTOMATIO || "",
};
