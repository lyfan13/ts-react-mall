import React, { useEffect } from 'react'
import BScroll from '@better-scroll/core'
import styled from 'styled-components'

const Scroll: React.FC<{children:React.ReactNode,height:string}> = ({ children,height }) => {

  useEffect(() => {
    printHaha()
    let wrapper: any = document.querySelector('.wrapper')
    let scroll = new BScroll(wrapper)
  }, [])
  function printHaha() {
    console.log(children)
  }
  const Wrapper = styled.div`
    height:${height};
    overflow: hidden;
  `;
  return (
    <Wrapper className="wrapper">
      <ul>
        {children}
      </ul>
    </Wrapper>
  )
}

export default Scroll