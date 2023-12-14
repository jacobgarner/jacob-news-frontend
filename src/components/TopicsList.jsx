import { useEffect, useState } from "react"
import { getTopics } from "../api"
import TopicCard from "./TopicCard"

export default function TopicsList() {
    const [topics, setTopics] = useState([])
    useEffect(()=>{
        getTopics().then((res)=>{
            setTopics(res)
        })
    },[])

  return (
    <div>
        <ul>
            {topics.map((topic)=>{
                return (<li key={topic.slug}>
                 <TopicCard topic={topic}></TopicCard>
                </li>)
            })}
        </ul>
    </div>
  )
}
