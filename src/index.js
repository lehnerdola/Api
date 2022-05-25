import 'dotenv/config'
import endpoints from './endpoints.js'
import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());
server.use(endpoints);

server.listen(process.env.PORT, 
                () => console.log(` API na porta ${process.env.PORT}`));
