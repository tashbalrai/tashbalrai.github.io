export const BOX_MIN_WIDTH = 300; //px value
export const BOX_STD_WIDTH = 426; //px value
export const MOBILE_CUTOFF = 640; //px value
export const BOX_COUNT_PER_ROW = 4;
export const MAX_BOXES = 4;

export const LOCAL_STORAGE_THEME_VAR_NAME = "theme-name";

export const SOCIAL_LINKS = {
    linkedin: "https://www.linkedin.com/in/vipan-balrai/",
    medium: "https://medium.com/@vbalrai",
};

const LIVE_URL = "https://huntize.com";
export const BASE_HTTP_URL =
    import.meta.env.MODE == "production" ? LIVE_URL : "http://localhost:4321";
export const ARTICLE_BASE_URL = BASE_HTTP_URL + "/learn/";
export const CATEGORY_BASE_URL = BASE_HTTP_URL + "/category/";
export const TAG_BASE_URL = BASE_HTTP_URL + "/tags/";
