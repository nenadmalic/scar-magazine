import { supabase } from "$lib/server/db/supabaseClient.js";
import type { News, Ads, frontpageLatestNews } from './types.ts';

export async function getContentAds(): Promise<Ads[]> {
    const { data, error } = await supabase
        .from("content")
        .select()
        .eq("content_category", "Glazba")
        .limit(3);

    if (error) {
        console.error('Error fetching Glazba content:', error);
        return [];
    }

    return data as Ads[];
}
export async function getContentCategoryNews(): Promise<News[]> {
    const { data, error } = await supabase
        .from("content")
        .select("content_id, content_title, content_text, content_category")
        .eq("content_category", "Novost")

    if (error) {
        console.error('Error fetching News content:', error);
        return [];
    }

    return data as News[];
}
export async function getFrontPageLatestNews(): Promise<frontpageLatestNews[]> {
    const { data, error } = await supabase
        .from("content")
        .select("content_id, content_title, content_published_at, content_text, content_category, content_sef_url")
        .eq("content_category", "Novost")
        .order('content_published_at', { ascending: false })
        .limit(10);

    if (error) {
        console.error('Error fetching Latest News content:', error);
        return [];
    }

    return data as frontpageLatestNews[];
}