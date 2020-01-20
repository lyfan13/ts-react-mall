import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import './styles/normalize.css'
import './styles/base.css'
// import axios from 'axios'
import NavBar from './components/common/NavBar'
// import Toast from './components/common/Toast';
// import TestDiv from './components/test/TestDiv';
import Home from './pages/Home';
import search from './pages/Search';
import tech from './pages/Tech';
import news from './pages/News';
import mine from './pages/Mine';


const App: React.FC = () => {


  return (
    <div className="App">
      {/* <TestDiv change={handleChange} /> */}
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/search" component={search} />
        <Route path="/tech" component={tech} />
        <Route path="/news" component={news} />
        <Route path="/mine" component={mine} />
      </Switch>
      <NavBar />
    </div>
  );
}


export default App;
