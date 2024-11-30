import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/new";
import React from "react";

function LatestNewsPage() {
  const latestNews = getLatestNews();
  return (
    <h2>
      Latest News
      <NewsList news={latestNews} />
    </h2>
  );
}

export default LatestNewsPage;
