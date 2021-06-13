import "reflect-metadata";
import axios from "axios";
import express from "express";

import videoSchema from "./model/schemaTest";

import "./database";

const api = express();

api.use(express.json());

const api_key = "3d78e5fdee37756247f8e97f348f0590d89efd18";
const company = "linkapi-sandbox";
const url = `https://${company}.pipedrive.com/api/v1/deals?api_token=${api_key}`;

api.get("/api", async (request, response) => {
  const { data } = await axios.get(url);
  return response.status(200).json(data);
});

// Testing mongoose
api.post("/api/test", async (request, response) => {
  const name = "Jeff";
  const description = "Realizando um teste";

  await videoSchema.create({
    name,
    description,
  });

  return response.status(201).json({ name, description });
});

// Testing create a deal

api.post("/api/deals", async (request, response) => {
  const { title, value, currency, user_id, stage_id, status } = request.body;

  await axios
    .post(url, {
      title,
      value,
      currency,
      user_id,
      stage_id,
      status,
    })
    .then((res) => {
      console.log(res);
      return response.status(201).json(res.data);
    })
    .catch((ee) => console.log(ee));

  // return response.status(201).json(data);
});

api.listen(3000, () => console.log("Server is Running!"));
