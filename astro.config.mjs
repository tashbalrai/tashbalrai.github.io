// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import path from "node:path";
import { remarkReadingTime } from "./src/plugins/remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
    site: "https://huntize.com",
    integrations: [
        react(),
        sitemap(),
        {
            name: "notes-watcher-integration",
            hooks: {
                "astro:server:setup": ({ server }) => {
                    const notesPath = path.resolve("../notes/");
                    if (server.config.mode !== "development") {
                        return;
                    }
                    console.log("Watching notes directory for changes");
                    server.watcher.add(path.resolve("../notes/"));
                    server.watcher
                        .on("add", (path) =>
                            console.log(`File ${path} has been added`)
                        )
                        .on("change", (path) =>
                            console.log(`File ${path} has been changed`)
                        );
                },
            },
        },
    ],
    vite: {
        plugins: [tailwindcss()],
    },
    markdown: {
        shikiConfig: {
            theme: "github-dark",
        },
        syntaxHighlight: {
            type: "shiki",
            excludeLangs: ["mermaid"],
        },
        remarkPlugins: [remarkReadingTime],
    },
    redirects: {
        "/article/[...slug]": {
            status: 301,
            destination: "/learn/[...slug]",
        },
    },
});
