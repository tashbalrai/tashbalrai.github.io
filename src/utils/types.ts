export interface IArticleFrontmatter {
    slug: string;
    title: string;
    coverImage?: string;
    excerpt: string;
    category: string;
    tags: string[];
    seoTitle?: string;
    seoKeywords?: string;
    seoDescription?: string;
    publishedAt?: string;
    minutesRead?: string;
    draft?: boolean;
    relatedArticles?: string[];
}

export interface ICard {
    data: IArticleFrontmatter;
    boxWidth?: string;
}

export interface ICardList {
    data: IArticleFrontmatter[];
    showSlogan?: boolean;
    minHeight?: string;
}

export interface ITextTag {
    children: React.ReactNode;
    className?: string;
}

export interface IBox {
    height?: string;
    width?: string;
    children: React.ReactNode;
    boxClass?: string;
}

export enum ThemeNames {
    DARK = "dark",
    WHITE = "white",
}
