import dotenv from "dotenv";

dotenv.config();

export const blingUrl = {
  baseURL: "https://bling.com.br/Api/v2",
  apikey: process.env.BLING_API_KEY,
};
