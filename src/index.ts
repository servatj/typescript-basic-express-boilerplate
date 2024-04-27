import "@src/config/loadEnvVars"

import { Server } from "./server"

const server = new Server();
server.start();
