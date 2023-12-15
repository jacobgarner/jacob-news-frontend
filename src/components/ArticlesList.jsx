import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { useNavigate } from 'react-router-dom';

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [sortBy, setSortBy] = useState('')
  const [sortOrder, setSortOrder] = useState('')
  const navigate = useNavigate();

  const queryParameters = new URLSearchParams(window.location.search)

  const topic = queryParameters.get("topic")

  const compareArticles = (a, b) => {
    console.log(a.comment_count)
    switch (sortBy) {
      case 'votes':
        return sortOrder === 'asc' ? a.votes - b.votes : b.votes - a.votes;
      case 'comment_count':
        return sortOrder === 'asc' ? a.comment_count - b.comment_count : b.comment_count - a.comment_count;
      case 'created_at':
        return sortOrder === 'asc' ? new Date(a.created_at) - new Date(b.created_at) : new Date(b.created_at) - new Date(a.created_at);
      default:
        return 0;
    }
  };

    

  const handleSortBy = (event) =>{
    setSortBy(event.target.value)
  }

  useEffect(() => {
    getArticles(topic).then((res) => {
      setArticles(res);
      setIsLoading(false)
    });
  }, [topic]);

  const sortedArticles = [...articles].sort(compareArticles)

  if(isLoading) return <div><p>Loading...</p></div>
  
  return (
    <div>
      <select value={sortBy} onChange={handleSortBy}>
        <option disabled>Sort By</option>
        <option value='created_at'>Date</option>
        <option value='comment_count'>Comment count</option>
        <option value='votes'>Votes</option>
      </select>
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      <ul className="flex flex-wrap">
        {sortedArticles.map((article) => {
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
