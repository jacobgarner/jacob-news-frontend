import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllArticles from "./pages/AllArticles";
import SingleArticle from "./pages/SingleArticle";
import { UserProvider } from "./context/user";
import FilteredArticles from "./components/FilteredArticles";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<AllArticles></AllArticles>}></Route>
        <Route path="/articles" element={<AllArticles></AllArticles>}></Route>
        <Route
          path="/articles/:articleId"
          element={<SingleArticle></SingleArticle>}
        ></Route>
        
      </Routes>
    </UserProvider>
  );
}

export default App;
