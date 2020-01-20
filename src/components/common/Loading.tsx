import React from 'react'
import styled from 'styled-components';

const Loading: React.FC = () => {
  const LoadingBox = styled.div`
    background:transparent;
    img{
      width:100px;
      height:100px;
    }
  `;
  return (
    <LoadingBox className="ps-fix-c">
      <img className="ps-abs-c" src="http://vue-upyun.test.upcdn.net/assets/react/loading.gif" alt="" />
    </LoadingBox>
  )
}

export default Loading