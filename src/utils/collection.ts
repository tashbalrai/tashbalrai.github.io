import { z } from "astro:content";

const loadArticles = async () => {
    const matches: any = import.meta.glob("../content/**/*.{md,mdx}", {
        eager: true,
    });

    const schema = z.object({
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
    });

    const articles = [];
    for (const key in matches) {
        try {
            schema.parse({
                ...matches[key].frontmatter,
                publishedAt: new Date(matches[key].frontmatter.publishedAt),
            });
            articles.push(matches[key]);
        } catch (err: any) {
            throw new Error(`${key} - ${err.message}`);
        }
    }
    return articles;
};

export default loadArticles;
