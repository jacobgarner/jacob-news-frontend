import { useEffect, useState } from "react";
import { getSingleArticle } from "../api";
import { useParams } from "react-router-dom";


export default function OpenedArticle() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

    let {articleId} = useParams();

  useEffect(() => {
    getSingleArticle(articleId).then((res) => {
      setArticle(res);
      setIsLoading(false);
    });
  }, []);

  if (isLoading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  const date = new Date(article.created_at);
  return (
    <div className="grid grid-cols-3 grid-rows-7 gap-0">
      <div className="col-span-3">
        <h3 className="text-3xl text-center">{article.title}</h3>
      </div>
      <div className="col-start-2 row-start-5">
        <p>{article.body}</p>
      </div>
      <div className="col-start-2 row-start-2 text-center">
        <p>
          Created by {article.author} at {date.toLocaleString()} about{" "}
          {article.topic}
        </p>
      </div>
      <div className="col-start-1 row-start-4 text-right mr-10">
        <p className="text-3xl">↑</p>
        <p className="mr-2">Votes: {article.votes}</p>
        <p className="text-3xl">↓</p>
      </div>
      <div className="row-span-2 col-start-2 row-start-3">
        <img src={article.article_img_url} alt="" />
      </div>
      <div className="row-span-2 col-start-2 row-start-6 text-center">
        <button className="font-bold bg-slate-500 m-5">
          View comments ({article.comment_count})
        </button>
      </div>
    </div>
  );
}
