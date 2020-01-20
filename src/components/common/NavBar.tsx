import React from 'react';
import styled from 'styled-components';
import Icon from './Icon'
import { NavLink  } from 'react-router-dom';

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
    a{
      height:100%;
      position:relative;
    }
    .active-link{
      &::before{
        content:'';
        position:absolute;
        left:2px;
        top:2px;
        right:2px;
        bottom:2px;
        border:1px solid white;
      }
    }
  `;

  const navList: { icon: string, name: string, route: string }[] = [
    { icon: 'home', name: '首页', route: 'home' },
    { icon: 'chazhao', name: '查找', route: 'search' },
    { icon: 'keji-', name: '科技', route: 'tech' },
    { icon: 'baozhi', name: '报纸', route: 'news' },
    { icon: 'mine', name: '我的', route: 'mine' }
  ]
  return (
    <nav className="ps-fix-b">
      <Container>
        {navList.map(i => {
          return (
            <Tab key={i.icon} >
              <NavLink to={`/${i.route}`} className="dp-fl-c-c" activeClassName="active-link">
                <Icon name={i.icon} size="20" />
                <span>{i.name}</span>
              </NavLink >
            </Tab>
          );
        })}
      </Container>
    </nav>
  )
}

export default NavBar;