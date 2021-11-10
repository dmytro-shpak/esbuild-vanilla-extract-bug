const { build } = require("esbuild");
const { vanillaExtractPlugin } = require("@vanilla-extract/esbuild-plugin");

(async () => {
  await build({
    entryPoints: ["src/entry.tsx"],
    bundle: true,
    minify: true,
    sourcemap: true,
    platform: "browser",
    outfile: "dist/entry.js",
    plugins: [vanillaExtractPlugin()],
    loader: {
      ".png": "file",
      ".svg": "file",
      ".jpg": "file",
    },
  });
})();
