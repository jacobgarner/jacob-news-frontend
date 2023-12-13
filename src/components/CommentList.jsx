import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../api";
import CommentCard from "./CommentCard";

export default function CommentList({ articleId }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCommentsByArticleId(articleId).then((res) => {
      setComments(res);
      setIsLoading(false);
    });
  }, [articleId]);


  if (isLoading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  return (
    <div>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <CommentCard comment={comment}></CommentCard>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
