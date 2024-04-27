import "./logger";

import http from "node:http";

import express, { Express } from "express";

import { config } from "@src/config/config";

export class Server {
  private readonly app: Express;
  private readonly port: number;
  private httpServer?: http.Server;

  constructor() {
    this.app = express();
    this.port = Number(config.server.port);
  }

  async start(): Promise<void> {
    this.app.get("/health", (req, res) => {
      res.status(200).send("OK");
    });

    this.httpServer = this.app.listen(this.port, () => {
      logger.info(`Server running on http://localhost:${this.port}`);
    });
  }

  async stop(): Promise<void> {
    this.httpServer?.close();
  }

  getHttpServer(): http.Server | undefined {
    return this.httpServer;
  }
}
