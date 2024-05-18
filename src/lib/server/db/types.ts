export type Tag = {
    tag_id: string;
    tag_name: string;
};

export type ContentTag = {
    tags: Tag[];
};

export type News = {
    content_id: string;
    content_title: string;
    content_text: string;
    content_category: string;
    content_sef_url: string;
    content_tags: ContentTag[];
};

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
export type LatestNews = {
    content_id: number;
    content_title: string;
    content_published_at: string;
    content_text: string;
    content_category: string;
    content_sef_url: string;
}
export type LatestReviews = {
    content_id: number;
    content_title: string;
    content_published_at: string;
    content_text: string;
    content_category: string;
    content_sef_url: string;
};
