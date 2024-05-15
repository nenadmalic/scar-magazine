export type News = {
    content_id: string;
    content_title: string;
    content_text: string;
    content_category: string;
    content_sef_url: string;
}
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
export type frontpageLatestNews = {
    content_id: number;
    content_title: string;
    content_published_at: string;
    content_text: string;
    content_category: string;
    content_sef_url: string;
}