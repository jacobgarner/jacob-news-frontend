import './App.css'
import { Routes, Route } from "react-router-dom";
import AllArticles from './pages/AllArticles';
import SingleArticle from './pages/SingleArticle';


function App() {


  return (<>
  <Routes> 
    <Route path='/articles' element={<AllArticles></AllArticles>}></Route>
    <Route path='/articles/:articleId' element={<SingleArticle></SingleArticle>}></Route>
  </Routes>
      </>
  )
}

export default App
