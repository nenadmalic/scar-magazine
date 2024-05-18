import { getContentAds, getLatestNews, getLatestReviews } from '$lib/server/db';

export async function load({ params }) {
  const ads = await getContentAds();
  const latestNews = await getLatestNews();
  const latestReviews = await getLatestReviews();

  return {
    props: {
      ads,
      latestNews,
      latestReviews
    }
  };
}