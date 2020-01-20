import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Scroll from '../components/common/Scroll'
import styled from 'styled-components'
// 我的
const News: React.FC = () => {
  const [newsList, setNewsList] = useState([])
  async function getNews() {
    const res = await Axios.get('http://192.168.10.139:4000/test')
    console.log(res)
    setNewsList(res.data)
  }
  useEffect(() => {
    getNews()
  }, [])
  const NewsWrapper = styled.div`
    h1{
      height:50px;
      line-height:50px;
    }
    .content{
      padding:12px;
    }
  `;
  return (
    <NewsWrapper>
      <h1>news</h1>
      {newsList.length &&
        <div className="content">
          <Scroll height="calc(100vh - 135px)">
            {newsList.map(i => NewsItem(i))}
          </Scroll>
        </div>
      }
    </NewsWrapper>
  )
}

interface newsItem {
  id: number,
  title: string,
  img: string,
  content: string
}

const NewsItem: React.FC<newsItem> = ({ id, title, img, content }) => {
  const Item = styled.div`
    background:#f5f6f8;
    border-radius:10px;
    margin-bottom:10px;
    padding:12px;
    h5{
      margin-bottom:8px;
    }
    div{
      display:flex;
      img{
        width:100px;
        height:100px;
      }
      p{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
    }
  `;
  return (
    <Item key={id}>
      <h5>{title}</h5>
      <div>
        <img src={img} alt="" />
        <p>{content}</p>
      </div>
    </Item>
  )
}

export default News