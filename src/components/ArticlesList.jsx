import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { useNavigate } from 'react-router-dom';

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [topicInput, setTopicInput] = useState("");
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    getArticles().then((res) => {
      setArticles(res);
      setIsLoading(false)
    });
  }, []);

  if(isLoading) return <div><p>Loading...</p></div>

  
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
            <li key={article.article_id} onClick={()=>{navigate(`/articles/${article.article_id}`)}} >
              {" "}
              <ArticleCard article={article}></ArticleCard>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
