import type { Loader } from "astro/loaders";
import { z } from "astro:content";

interface IOptions {
    pattern: string | string[];
}

export function directoryContentLoader(options: IOptions): Loader {
    const baseDir = "./src/content/";

    return {
        name: "directory-content-loader",
        load: async ({ store, parseData }): Promise<void> => {
            const matches: any = import.meta.glob(
                ["./content/angular/*.md", "./content/*.md"],
                {
                    eager: true,
                }
            );
            store.clear();

            for (const path in matches) {
                const id = path.replace("./content/", "").replace(".md", "");
                const content = matches[path];

                if (typeof content === "object" && content !== null) {
                    const data = await parseData({
                        id,
                        data: {
                            ...content.frontmatter,
                            publishedAt: new Date(
                                content.frontmatter.publishedAt
                            ),
                        },
                        filePath: baseDir + id + ".md",
                    });

                    store.set({
                        id,
                        data,
                        filePath: baseDir + id + ".md",
                        body: await content.rawContent(),
                        rendered: {
                            html: await content.compiledContent(),
                            metadata: {
                                headings: await content.getHeadings(),
                            },
                        },
                    });
                }
            }
        },
        schema: z.object({
            draft: z.boolean().optional(),
            slug: z.string(),
            title: z.string(),
            excerpt: z.string(),
            category: z.string(),
            tags: z.array(z.string()),
            seoTitle: z.string().optional(),
            seoKeywords: z.string().optional(),
            seoDescription: z.string().optional(),
            publishedAt: z.date(),
        }),
    };
}
