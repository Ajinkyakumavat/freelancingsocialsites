import React, { useState } from 'react';
import './Works.scss';

const Works = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: '1',
      icon: 'assets/mobile.png',
      title:'Code Design',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, dicta. Culpa optio magni nihil sapiente esse numquam amet.',
      img: 'design/d2.jpeg'
  },
  {
    id: '2',
    icon: 'assets/globe.jpg',
    title:'Assets',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, dicta. Culpa optio magni nihil sapiente esse numquam amet.',
    img: 'featured/f3.jpeg'
},
{
  id: '3',
  icon: 'assets/writing.png',
  title:'Responsive',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, dicta. Culpa optio magni nihil sapiente esse numquam amet.',
  img: 'mobile app/m2.jpeg'
},
  ]

  const handleClick = (way) => {
        way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 :2) :
        setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  }
  return (
    <div className='works' id='works'>
      <div className="slider" style={{transform: `translateX(-${currentSlide *
         100}vw)`}}>
        {data.map(d =>(<div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                   <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt="" />
            </div>
          </div>
        </div>))}
      </div>
      <img src="assets/arrow.png" className='arrow right' alt="" onClick={() => handleClick('left')}/>
      <img src="assets/arrow.png" className='arrow left' alt="" onClick={() => handleClick('right')} />
    </div>
  )
}

export default Works