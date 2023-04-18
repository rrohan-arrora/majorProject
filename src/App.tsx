import './App.css';
import { Navbar } from './layouts/navbarAndFooter/Navbar';
import { Footer } from './layouts/navbarAndFooter/Footer';
import { HomePage } from './layouts/HomePage/HomePage';
import { SearchBookPage } from './layouts/SearchBookPage/SearchBookPage';
import { Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      {/* Switch helps in  handling the rendering 
      of single route. Before , both homepage and 
      search page was rendering. Also, always home page 
      was rendering as "/"" matches even of we do "/search".
      In order to handle that, we used exactl*/}
      <Switch> 
        <Route path="/" exact>
          <Redirect to='/home' />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path='/search'>
          <SearchBookPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
