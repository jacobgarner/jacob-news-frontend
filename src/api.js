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

export const getCommentsByArticleId = (articleId) =>{
    return newsApi.get(`/articles/${articleId}/comments`).then((res)=>{
        return res.data.comments
    })
}

export const patchArticleVotes = (articleId, amount) =>{
    return newsApi.patch(`/articles/${articleId}`, {inc_votes:amount})
}
