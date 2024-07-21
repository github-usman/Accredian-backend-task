import express from "express";
import { serverPort, serverMode } from "./config/env.config.js";
import bodyParser from "body-parser";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import referralRouter from './routes/referral.routes.js'

export const prisma = new PrismaClient();
const server = express();

// middlewares
server.use(bodyParser.json());
server.use(cors());

// routes
server.use('/api/v1',referralRouter);

server.get('/', (req, res) => {
  res.send(
    "Hello World!"
  )
})

async function mainServer() {
  server.listen(serverPort, () => {
    console.log(`server is running on port ${serverPort} in ${serverMode} mode`);
  });
}

// using prisma ORM DB connection
mainServer()
  .then(async () => {
    await prisma.$connect();
    console.log(`Database is connected Successfully`);
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

