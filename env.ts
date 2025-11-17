import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

export const ENV = {
  uiSaucedemoUrl: process.env.UI_SAUCEDEMO_URL || "https://www.saucedemo.com/",

  uiOrangeHRMUrl:
    process.env.UI_ORANGEHRM_URL ||
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login/",

  apiReqresUrl: process.env.API_REQRES_URL || "https://reqres.in/api/",

  apiJsonPlaceHolderUrl:
    process.env.API_JSON_PLACE_HOLDER_URL ||
    "https://jsonplaceholder.typicode.com/",

  testomatApiKey: process.env.TESTOMATIO || "",
};
