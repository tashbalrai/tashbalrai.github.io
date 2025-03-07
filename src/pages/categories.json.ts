import loadArticles from "../utils/collection";

export async function GET({ params, request }: any) {
    const collection = await loadArticles();
    const categories: string[] = [];
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].frontmatter.category)
            categories.push(collection[i].frontmatter.category);
    }

    return new Response(JSON.stringify(categories));
}
