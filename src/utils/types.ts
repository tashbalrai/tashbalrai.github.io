export interface IArticleFrontmatter {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    tags: string[];
    seoTitle?: string;
    seoKeywords?: string;
    seoDescription?: string;
    publishedAt?: Date;
    draft?: boolean;
}

export interface ICard {
    data: IArticleFrontmatter;
    boxWidth?: string;
}

export interface ICardList {
    data: IArticleFrontmatter[];
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
