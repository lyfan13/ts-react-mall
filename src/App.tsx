import React, { useState } from 'react';
import './App.css';
import './styles/normalize.css'
import './styles/base.css'
import axios from 'axios'
import NavBar from './components/common/NavBar'
import Toast from './components/common/Toast';

interface Iuser {
  name?: string
  age?: number
}

const App: React.FC = () => {

  const [user, setUser] = useState<Iuser>({});
  const numbers = [1, 2, 3, 4, 5]
  async function handleClick(name: string) {
    console.log(`handleClick:${name}`)
    const res = await axios.get('http://localhost:4000/test')
    console.log(res)
    setUser(res.data)
  }
  return (
    <div className="App">
      <Toast content="Do you miss me?" />
      <button className="cl-p fs-12" onClick={() => handleClick('haha')}>点击请求数据</button>
      {user.name && <div>{user.name}</div>}
      {user.age && <div>{user.age}</div>}
      <ul>
        {numbers.map(number => <li key={number}>{number}</li>)}
      </ul>
      <NavBar />
    </div>
  );
}


export default App;
