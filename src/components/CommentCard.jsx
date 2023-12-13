export default function CommentCard({comment}) {

    const date = new Date(comment.created_at);

  return (
    <div className="border-y">
        <p className="text-left mb-2">{comment.author} created at: {date.toLocaleString()} ↑ {comment.votes} ↓</p>  
        <p className="text-left">{comment.body}</p>
    </div>
  )
}
