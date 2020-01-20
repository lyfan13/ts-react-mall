import React from 'react'


const TestDiv:React.FC<{change:any}> = ({change})=>{
  return (
    <div>
      <h1>TestDiv</h1>
      <button onClick={change}>点击改变</button>
    </div>
  )
}

export default TestDiv