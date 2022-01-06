import * as abro from "./src/index.mjs";

if (typeof window !== "undefined") {
  window.abro = abro.default;
}
