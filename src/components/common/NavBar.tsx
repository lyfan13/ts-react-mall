import React from 'react';
import styled from 'styled-components';
import Icon from './Icon'

const NavBar: React.FC = () => {

  const Container = styled.div`
    background:palevioletred;
    color:white;
    font-size:14px;
    height:50px;
    display:flex;
  `;
  const Tab = styled.div`
    flex:1;
  `;

  const navList: { icon: string, name: string }[] = [
    { icon: 'home', name: '首页' },
    { icon: 'chazhao', name: '查找' },
    { icon: 'keji-', name: '科技' },
    { icon: 'baozhi', name: '报纸' },
    { icon: 'mine', name: '我的' }
  ]
  return (
    <nav className="ps-fix-b">
      <Container>
        {navList.map(i => {
          return (
            <Tab key={i.icon} className="dp-fl-c-c">
              <Icon name={i.icon} size="20" />
              <span>{i.name}</span>
            </Tab>
            );
        })}
      </Container>
    </nav>
  )
}

export default NavBar;