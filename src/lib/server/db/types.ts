<<<<<<< HEAD
=======
export type Tag = {
    tag_id: string;
    tag_name: string;
};

export type ContentTag = {
    tags: Tag[];
};

>>>>>>> 2e0df89 (First commit.)
export type News = {
    content_id: string;
    content_title: string;
    content_text: string;
    content_category: string;
    content_sef_url: string;
<<<<<<< HEAD
}
=======
    content_tags: ContentTag[];
};

>>>>>>> 2e0df89 (First commit.)
export type Ads = {
    content_id: number;
    content_title: string;
    content_text: string;
    content_category: string;
    content_add_image_url: string;
    content_add_image_alt_text: string;
    content_add_audio_title: string;
    content_sef_url: string;
}
<<<<<<< HEAD
export type frontpageLatestNews = {
=======
export type latestNews = {
>>>>>>> 2e0df89 (First commit.)
    content_id: number;
    content_title: string;
    content_published_at: string;
    content_text: string;
    content_category: string;
    content_sef_url: string;
<<<<<<< HEAD
}
=======
}
export type latestReviews = {
    content_id: number;
    content_title: string;
    content_published_at: string;
    content_text: string;
    content_category: string;
    content_sef_url: string;
};
>>>>>>> 2e0df89 (First commit.)
