import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

interface Iuser{
  name?:string
  age?:number
}

const App: React.FC = () => {

  const [user, setUser] = useState<Iuser>({});

  async function handleClick(name: string) {
    console.log(`handleClick:${name}`)
    const res = await axios.get('http://localhost:4000/test')
    console.log(res)
    setUser(res.data)
  }
  return (
    <div className="App">
      <button onClick={() => handleClick('haha')}>点击请求数据</button>
      {user.name && <div>{user.name}</div>}
      {user.age && <div>{user.age}</div>}
    </div>
  );
}

export default App;
