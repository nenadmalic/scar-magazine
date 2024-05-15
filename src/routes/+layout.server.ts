import { getContentAds, getFrontPageLatestNews } from '$lib/server/db';

export async function load({ params }) {
  const ads = await getContentAds();
  const latestNews = await getFrontPageLatestNews();

  return {
    props: {
      ads,
      latestNews,
    }
  };
}