import { useNavigate } from "react-router-dom"

export default function TopicCard({topic}) {

    const navigate = useNavigate();
  return (
    <div className="flex" onClick={()=>{navigate(`/articles?topic=${topic.slug}`)}}>
        <p> Topic: {topic.slug} </p>
        <p> </p>
        <p className="ml-2"> Description: {topic.description}</p>
    </div>
  )
}
