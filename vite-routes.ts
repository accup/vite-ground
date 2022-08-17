import { resolve } from "node:path";

const rootDir = resolve(__dirname, "src");

export default {
  index: resolve(rootDir, "index.html"),
  "svg/index": resolve(rootDir, "svg", "index.html"),
};
