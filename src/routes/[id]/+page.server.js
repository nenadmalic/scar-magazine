import { supabase } from "$lib/server/db/supabaseClient";

export async function load({ params }) {
	const { data } = await supabase
        .from("content")
        .select()
        .eq("content_id", params.id)

    return {
        content: data ?? [],
    };
}