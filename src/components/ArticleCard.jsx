export default function ArticleCard({article}) {

  return (
    <div className="h-72 w-96 grid grid-cols-6 grid-rows-6 gap-0 text-left m-5 border-y rounded-md bg-slate-500 hover:bg-slate-700 cursor-pointer">
        <h3 className="col-span-6 row-span-2 col-start-1 row-start-1 font-bold text-center">{article.title}</h3>
        <img src={article.article_img_url} alt=""  className="col-span-4 row-span-4 col-start-2 row-start-2 mt-4"/>
        <a className="row-start-6 col-start-3 col-span-3 mt-4">View comments ({article.comment_count})</a>
    </div>
  )
}
