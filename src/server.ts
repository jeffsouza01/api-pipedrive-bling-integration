import "reflect-metadata";
import axios from "axios";
import cors from "cors";
import express from "express";
import parse from "xml2js";

import videoSchema from "./model/schemaTest";

import "./database";
import { IDeal } from "model/IDeal";

import { pipeDriveUrl } from "./config/pipedrive";
import { blingUrl } from "./config/bling";

const api = express();

api.use(express.json());
api.use(cors());

api.get("/api", async (request, response) => {
  console.log(pipeDriveUrl);
  const { data } = await axios.get(pipeDriveUrl);
  const infoDeal: IDeal[] = data.data;

  const filteredDeal = infoDeal.filter((deal) => deal.status == "won");

  return response.status(200).json(filteredDeal);
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
    .post(pipeDriveUrl, {
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
    .catch((err) => {
      return response.status(201).json({ err });
    });
});

// get products for bling
api.get("/api/bling/produtos", async (request, response) => {
  const urlProdutos = `${blingUrl.baseURL}/produtos/json?apikey=${blingUrl.apikey}`;
  const { data } = await axios.get(urlProdutos);

  console.log(data);

  return response.status(200).json(data);
});

api.get("/api/test", async (request, response) => {
  return response.status(200).json({ message: "Teste de webhook" });
});

api.post("/api/bling/pedido", async (request, response) => {
  const urlPedido = `${blingUrl.baseURL}/pedido/json?apikey=${blingUrl.apikey}`;

  const pedido = request.body;

  const xml = new parse.Builder();

  const pedidoParse = xml.buildObject(pedido);

  // pedidoParse.replace(/(\r?\n|\r)/gm, " ");

  await axios
    .post(`${urlPedido}&xml=${pedidoParse}`)
    .then((res) => {
      return response.json(res.data);
    })
    .catch((ee) => {
      return response.json(ee);
    });
});

api.post("/api/bling/produto", async (request, response) => {
  const urlProdutos = `${blingUrl.baseURL}/produto/json?apikey=${blingUrl.apikey}`;

  const produto = request.body;

  const xml = new parse.Builder();

  const produtoParse = xml.buildObject(produto);

  console.log(produtoParse);

  await axios
    .post(urlProdutos, {
      produtoParse,
    })
    .then((res) => {
      return response.json(res.data);
    })
    .catch((ee) => {
      return response.json(ee);
    });
});

const port = process.env.PORT || 3000;
api.listen(port, () => console.log("Server is Running!"));
