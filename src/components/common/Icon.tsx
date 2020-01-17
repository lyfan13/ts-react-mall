import React from 'react';

const Icon:React.FC<{name:string,size?:string}> = ({name,size})=>{
  const sty = {
    fontSize:`${size}px`
  }
  return(
    <i className="iconfont" style={sty}>{name}</i>
  )
}

export default Icon