import axios from "axios";

const newsApi = axios.create({baseURL: "https://jacobs-news-api.onrender.com/api"})


export const getArticles = () =>{
    return newsApi.get("/articles").then((res)=>{
        return res.data
    })
}

export const getSingleArticle = (articleId) =>{
    return newsApi.get(`/articles/${articleId}`).then((res)=>{
        return res.data.article
    })
}

