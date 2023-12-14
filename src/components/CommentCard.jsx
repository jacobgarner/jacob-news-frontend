import { useContext, useState } from "react";
import { UserContext } from "../context/user";
import { deleteComment } from "../api";

export default function CommentCard({ comment }) {
  const [deleted, setDeleted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false)

  const { currentUser } = useContext(UserContext);

  const date = new Date(comment.created_at);

  const handleClick = () => {
    if(loading){
      return
    }
    setLoading(true)
    deleteComment(comment.comment_id).then((res) => {
      if (res === "Comment deleted") {
        setDeleted(true);
        setError(false);
      } else {
        setError(true);
      }
    }).finally(()=>{
      setLoading(false)
    })
  };
  return (
    <div>
      {deleted ? (
        <p>Comment deleted</p>
      ) : (
        <div className="border-y">
          {error ? <p>Deletion failed!</p>:<p></p>}
          {currentUser.username === comment.author ? (
            <p onClick={handleClick} style={{cursor:loading?"not-allowed":"pointer"}}>{loading ? 'Deleting...' : 'x'}</p>
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
