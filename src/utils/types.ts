export interface IArticle {
    slug: string;
    title: string;
    coverImage?: string;
    excerpt?: string;
    category: string;
    tags: string[];
    author?: string;
    aboutAuthor?: string;
    seoTitle?: string;
    seoKeywords?: string;
    seoDescription?: string;
    publishedAt?: Date;
}

export interface ICard {
    data: IArticle;
    boxWidth?: string;
}

export interface ICardList {
    data: IArticle[];
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
