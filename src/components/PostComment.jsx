import { useContext, useState } from "react";
import { UserContext } from "../context/user";
import { postComment } from "../api";
import CommentCard from "./CommentCard";

export default function PostComment({ articleId }) {
  const [comment, setComment] = useState({});
  const [commentInput, setCommentInput] = useState("");
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState('');

  const { currentUser } = useContext(UserContext);

  const handleCommentChange = (event) => {
    setCommentInput(event.target.value);
  };

  const handleClick = () => {
    postComment(articleId, commentInput, currentUser.username)
      .then((res) => {
        setError("")
        setNewComment(commentInput);
        setCommentInput("");
        setComment(res.addedComment);
      })
      .catch((err) => {
        setError("Error")
      });
  };

  return (
    <div>
      <input
        type="text"
        value={commentInput}
        onChange={handleCommentChange}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <button
        onClick={handleClick}
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-1 "
      >
        Post comment
      </button>
      {error ? <p>Error!</p> : <p></p>}

      {newComment ? (
        <CommentCard comment={comment}></CommentCard>
      ) : (
        <p>{newComment}</p>
      )}
    </div>
  );
}
