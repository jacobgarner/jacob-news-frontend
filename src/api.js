import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://jacobs-news-api.onrender.com/api",
});

export const getArticles = () => {
  return newsApi.get("/articles").then((res) => {
    return res.data;
  });
};

export const getSingleArticle = (articleId) => {
  return newsApi.get(`/articles/${articleId}`).then((res) => {
    return res.data.article;
  });
};

export const getCommentsByArticleId = (articleId) => {
  return newsApi.get(`/articles/${articleId}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const patchArticleVotes = (articleId, amount) => {
  if (navigator.onLine) {
    return newsApi
      .patch(`/articles/${articleId}`, { inc_votes: amount })
      .then((res) => {})
      .catch((err) => {
        throw err;
      });
  } else {
    return Promise.reject("Offline. Unable to make request");
  }
};

export const postComment = (articleId, body, username) => {
  return newsApi
    .post(`/articles/${articleId}/comments`, {
      body: body,
      username: username,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err)=>{
        throw err
    })
};

export const getUsers = () =>{
    return newsApi.get("/users").then((res)=>{
        return res.data.users
    })
}

export const deleteComment = (commentId) =>{
  return newsApi.delete(`/comments/${commentId}`).then((res)=>{
    if(res.status === 204){
      return "Comment deleted"
    }
    else{
      return "Error"
    }
  })
  .catch((err)=>{
    return err
  })
}
