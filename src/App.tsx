import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import './styles/normalize.css'
import './styles/reset.css'
import './styles/base.css'
// import axios from 'axios'
import NavBar from './components/common/NavBar'
// import Toast from './components/common/Toast';
// import TestDiv from './components/test/TestDiv';
import loadable from '@loadable/component';
const PageHome = loadable(() => import('./pages/Home'));
const PageSearch = loadable(() => import('./pages/Search'));
const PageTech = loadable(() => import('./pages/Tech'));
const PageNews = loadable(() => import('./pages/News'));
const PageMine = loadable(() => import('./pages/Mine'));

const App: React.FC = () => {


  return (
    <div className="App">
      {/* <TestDiv change={handleChange} /> */}
      <Switch>
        <Route path="/home" component={PageHome} />
        <Route path="/search" component={PageSearch} />
        <Route path="/tech" component={PageTech} />
        <Route path="/news" component={PageNews} />
        <Route path="/mine" component={PageMine} />
      </Switch>
      <NavBar />
    </div>
  );
}


export default App;
