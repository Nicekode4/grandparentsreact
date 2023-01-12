import './App.scss';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

import { BrowserRouter } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import AppRouter from './Components/AppRouter/AppRouter';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <AppRouter />
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export { App };
