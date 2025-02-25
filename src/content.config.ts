import { defineCollection } from "astro:content";
import { directoryContentLoader } from "./loader";

const articles = defineCollection({
    loader: directoryContentLoader({ pattern: "../content/**/*.md" }),
});

export const collections = { articles };
