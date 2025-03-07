import loadArticles from "../utils/collection";

export async function GET({ params, request }: any) {
    const collection = await loadArticles();
    const filteredCollection = collection.map((record) => {
        return record.frontmatter;
    });

    return new Response(JSON.stringify(filteredCollection));
}
