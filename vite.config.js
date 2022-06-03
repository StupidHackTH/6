import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import ViteFont from "vite-plugin-fonts";

export default defineConfig({
    plugins: [
        solidPlugin(),
        ViteFont({
            custom: {
                families: [
                    {
                        name: "XKCD",
                        local: "XKCD",
                        src: "./src/assets/fonts/xkcd.otf",
                    },
                ],
            },
        }),
    ],
    build: {
        target: "esnext",
        polyfillDynamicImport: false,
    },
    base: `/6/`,
    assetsInclude: ["**/*.otf"],
});
