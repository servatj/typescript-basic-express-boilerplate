import Transport from "winston-transport";

import logger from "@src/logger";

interface Info {
  message: string;
  level: string;
}

class TestTransport extends Transport {
  logs: Info[] = [];

  log(info: Info, callback: () => void) {
    this.logs.push(info);
    callback();
  }
}

describe("Logger", () => {
  let testTransport: TestTransport;

  beforeAll(() => {
    testTransport = new TestTransport();
    logger.add(testTransport);
  });

  afterAll(() => {
    logger.remove(testTransport);
  });

  it("should log messages correctly", () => {
    const testMessage = "Test log message";
    logger.info(testMessage);

    expect(testTransport.logs).toHaveLength(1);
    expect(testTransport.logs[0].message).toBe(testMessage);
    expect(testTransport.logs[0].level).toBe("info");
  });
});
