import React, { useEffect, useState } from 'react';
import './Portfolio.scss';
import PortfolioList from '../portfolioList/PortfolioList';
import featuredPortfolio from '../data/featured';
import webPortfolio from '../data/web';
import mobilePortfolio from '../data/mobile';
import designPortfolio from '../data/design';
import contentPortfolio from '../data/content';

const Portfolio = () => {

  const[selected, setSelected] = useState('featured');
  const[data, setData] = useState([]);

  const list = [
    {
      id: 'featured',
      title: 'Feature'
    },
    {
      id: 'web',
      title: 'Web App'
    },
    {
      id: 'mobile',
      title: 'Mobile App'
    },
    {
      id: 'design',
      title: 'Design'
    },
    {
      id: 'content',
      title: 'Content'
    },
  ]

  useEffect(() => {

      switch(selected){
        case "featured":
          setData(featuredPortfolio);
          break;

          case "web":
          setData(webPortfolio);
          break;

          case "mobile":
          setData(mobilePortfolio);
          break;

          case "design":
          setData(designPortfolio);
          break;

          case "content":
          setData(contentPortfolio);
          break;
          default:
          setData(featuredPortfolio);
      }
  },[selected])
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item)=>(
          <PortfolioList title = {item.title} active = {selected===item.id} setSelected = {setSelected} id = {item.id}/>
        ))}
      </ul>
      <div className="container">
        {data.map(d =>(
        <div className="item">
          <img src={d.img} alt="" />
          <h3>{d.title}</h3>
        </div>
        ))}
        </div>
    </div>
  )
}

export default Portfolio