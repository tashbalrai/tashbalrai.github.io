import loadArticles from "../utils/collection";

export async function GET({ params, request }: any) {
    const collection = await loadArticles();
    const tags: string[] = [];
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].frontmatter.tags)
            tags.push(...collection[i].frontmatter.tags);
    }

    return new Response(JSON.stringify(tags));
}
