import dotenv from "dotenv";

dotenv.config();

const api_key = process.env.PIPEDRIVE_API_KEY;
const company = process.env.COMPANY;

export const pipeDriveUrl = `https://${company}.pipedrive.com/api/v1/deals?api_token=${api_key}`;
