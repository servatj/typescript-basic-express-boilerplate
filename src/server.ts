import http from 'http';
import express, { Express } from 'express';
import { config } from '@src/config/config';

export class Server {
  private readonly app: Express;
  private readonly port: number;
  private httpServer?: http.Server;

  constructor() {
    this.app = express();
    this.port = Number(config.server.port);
  }

  async start(): Promise<void> {
    this.app.get('/healthcheck', (req, res) => {
      res.status(200).send('OK');
    });

    this.httpServer = this.app.listen(this.port, () => {
      console.log(`Server running on http://localhost:${this.port}`);
    });
  }

  async stop(): Promise<void> {
    this.httpServer?.close();
  }
}
