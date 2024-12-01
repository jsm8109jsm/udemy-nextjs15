import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

async function NewsPage() {
  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}

export default NewsPage;
