import React from 'react';

interface Person {
  [proppName: string]: any;
}

const Icon: React.FC<{ name: string, size?: string }> = ({ name, size }) => {
  const sty = {
    fontSize: `${size}px`
  }
  return (
    <i className={`iconfont icon-w_${name}`} style={sty}></i>
  )
}

export default Icon