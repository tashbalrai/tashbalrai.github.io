import { defineCollection, z } from "astro:content";
import { glob } from "astro:loaders";

const articles = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "../content" }),
});
