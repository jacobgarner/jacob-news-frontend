import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [topicInput, setTopicInput] = useState("");

  useEffect(() => {
    getArticles().then((res) => {
      setArticles(res);
    });
  }, []);

  return (
    <div>
      <select defaultValue="Sort By">
        <option disabled>Sort By</option>
        <option>cooking</option>
        <option>coding</option>
        <option>football</option>
      </select>
      <ul className="flex flex-wrap">
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              {" "}
              <ArticleCard article={article}></ArticleCard>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
