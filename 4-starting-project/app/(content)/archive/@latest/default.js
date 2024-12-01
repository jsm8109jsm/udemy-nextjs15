import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";
import React from "react";

async function LatestNewsPage() {
  const latestNews = await getLatestNews();
  return (
    <h2>
      Latest News
      <NewsList news={latestNews} />
    </h2>
  );
}

export default LatestNewsPage;
