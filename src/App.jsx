import './App.scss';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ArticleFour from './Components/Main/ArticleFour';
import ArticleOne from './Components/Main/ArticleOne';
import ArticleThree from './Components/Main/ArticleThree';
import ArticleTwo from './Components/Main/ArticleTwo';

function App() {
  return (
    <div className="App">
      <Header />
      <ArticleOne />
      <ArticleTwo />
      <ArticleThree />
      <ArticleFour />
      <Footer />
    </div>
  );
}

function Clean() {
  return (
    <div className="App">
      <Header />
      <ArticleOne />
      <ArticleTwo />
      <ArticleThree />
      <ArticleFour />
      <Footer />
    </div>
  );
}

export { App, Clean };
