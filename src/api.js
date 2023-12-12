import axios from "axios";

const newsApi = axios.create({baseURL: "https://jacobs-news-api.onrender.com/api"})


export const getArticles = () =>{
    return newsApi.get("/articles").then((res)=>{
        return res.data
    })
}

