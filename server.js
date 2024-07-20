import express from "express";
import { serverPort, serverMode } from "./config/env.config.js";
import bodyParser from "body-parser";
import cors from "cors";
const server = express();


// middlewares
server.use(bodyParser.json());
server.use(cors());


server.get('/',(req,res)=>{
  res.send(
    "Hello World!"
  )
})

server.listen(serverPort, () => {
  console.log(`server is running on port ${serverPort} in ${serverMode} mode`);
});

