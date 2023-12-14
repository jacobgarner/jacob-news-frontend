import { useContext, useState } from "react";
import { UserContext } from "../context/user";
import { deleteComment } from "../api";

export default function CommentCard({ comment }) {
  const [deleted, setDeleted] = useState(false);
  const [error, setError] = useState(false);

  const { currentUser } = useContext(UserContext);

  const date = new Date(comment.created_at);

  const handleClick = () => {
    deleteComment(comment.comment_id).then((res) => {
      if (res === "Comment deleted") {
        setDeleted(true);
        setError(false);
      } else {
        setError(true);
      }
    });
  };
  return (
    <div>
      {deleted ? (
        <p>Comment deleted</p>
      ) : (
        <div className="border-y">
          {error ? <p>Deletion failed!</p>:<p></p>}
          {currentUser.username === comment.author ? (
            <p onClick={handleClick}>x</p>
          ) : (
            <p></p>
          )}
          <p className="text-left mb-2">
            {comment.author} created at: {date.toLocaleString()} ↑{" "}
            {comment.votes} ↓
          </p>
          <p className="text-left">{comment.body}</p>
        </div>
      )}
    </div>
  );
}
