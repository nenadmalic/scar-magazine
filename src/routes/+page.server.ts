
import { getContentCategoryNews } from '$lib/server/db';

export async function load() {

  const news = await getContentCategoryNews();
  // console.log('Fetched news:', news);  // Debug log to check fetched data

  return {
    props: {
      news,
    }
  };
}