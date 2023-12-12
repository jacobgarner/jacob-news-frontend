import OpenedArticle from "../components/OpenedArticle";

export default function SingleArticle({articleId}) {
  return (
    <div>
        <OpenedArticle articleId={articleId}></OpenedArticle>
    </div>
  )
}
