import React from 'react';
import styled from 'styled-components';
import Icon from './Icon'

const NavBar: React.FC = () => {

  const Container = styled.div`
    background:palevioletred;
    color:white;
    font-size:14px;
    height:50px;
  `;

  return (
    <nav className="ps-fix-b">
      <Container>
        {/* <i className="iconfont">&#xe67f;</i> */}
        <Icon name="&#xe67f;" size="40"/>
      </Container>
    </nav>
  )
}

export default NavBar;