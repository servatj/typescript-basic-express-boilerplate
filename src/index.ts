import "@src/config/load-env-vars";

import { Server } from "./server";

const server = new Server();

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
  await server.start().catch(error => {
    logger.error(error);
  });
})();
