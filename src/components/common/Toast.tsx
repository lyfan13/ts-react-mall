import React from 'react';
import styled from 'styled-components';
import Icon from './Icon'

const Toast: React.FC<{ icon?: string, content: string }> = ({ icon, content }) => {
  const ToastBox = styled.div`
    color:white;
    background-color: rgba(58,58,58,.9);
  `;
  return (
    <ToastBox>
      {icon && <Icon name={icon} size="10" />}
      <span>{content}</span>
    </ToastBox>
  )
}

export default Toast