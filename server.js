import { createServer } from "node:http";

export const server = createServer(response, request);

response.statusCode = 200;
response.end("Hello, world!");
