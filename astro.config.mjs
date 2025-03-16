// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";
import rehypeMermaid from "rehype-mermaid";

// https://astro.build/config
export default defineConfig({
    site: "https://huntize.com",
    integrations: [react(), sitemap()],
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
        rehypePlugins: [
            [
                rehypeMermaid,
                {
                    mermaidConfig: {
                        theme: "base",
                        themeVariables: {
                            primaryColor: "#fff4dd",
                            primaryBorderColor: "#a6a6a6",
                            primaryTextColor: "#665d5d",
                            lineColor: "#fff4dd",
                            secondaryColor: "#e2d5f3",
                        },
                    },
                },
            ],
        ],
    },
});
