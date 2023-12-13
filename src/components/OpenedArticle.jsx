import { useEffect, useState } from "react";
import { getSingleArticle, patchArticleVotes } from "../api";
import { useParams } from "react-router-dom";
import CommentList from "./CommentList";

export default function OpenedArticle() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [votes, setVotes] = useState(0);
  const [error, setError] = useState('')

  let { articleId } = useParams();

  const handleVoteClick = (amount) => {
    setVotes(votes + amount);
    patchArticleVotes(articleId, amount)
      .then(() => {
        setError('')
      })
      .catch((err) => {
        setError(err.response.data.msg)
        setVotes(votes-1)
      });
  };

  const handleUpVoteClick = () => {
    handleVoteClick(1);
  };
  const handleDownVoteClick = () => {
    handleVoteClick(-1);
  };

  console.log(article.votes);
  useEffect(() => {
    getSingleArticle(articleId).then((res) => {
      setArticle(res);
      setVotes(res.votes);
      setIsLoading(false);
    });
  }, [articleId]);

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
        {error ? <p>{error}</p> : <p></p>}
        <p
          className="text-3xl hover:cursor-pointer"
          onClick={handleUpVoteClick}
        >
          ↑
        </p>
        <p className="mr-2">Votes: {votes}</p>
        <p
          className="text-3xl hover:cursor-pointer"
          onClick={handleDownVoteClick}
        >
          ↓
        </p>
      </div>
      <div className="row-span-2 col-start-2 row-start-3">
        <img src={article.article_img_url} alt="" />
      </div>
      <div className="row-span-2 col-start-2 row-start-6 text-center">
        <button className="font-bold bg-slate-500 m-5">
          View comments ({article.comment_count})
        </button>
      </div>
      <div className="row-span-2 col-start-2 row-start-8 text-center">
        <CommentList articleId={articleId}></CommentList>
      </div>
    </div>
  );
}
