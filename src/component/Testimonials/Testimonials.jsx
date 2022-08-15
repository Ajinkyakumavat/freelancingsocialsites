import React from 'react';
import './Testimonials.scss';

const Testimonials = () => {

  const page1 = [
    {
      id : '1',
      name : 'Shivaji Maharaj',
      icon: 'assets/youtube.png',
      title : 'CEO Of Amezon',
      img : 'assets/shivaji.jpeg',
      desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Explicabo repellat reprehenderit quam.'
    },
    {
      id : '2',
      name : 'Ajinkya',
      icon : 'assets/twitter.png',
      title : 'CEO Of Shpsy',
      img : 'assets/p1.jpg',
      desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Explicabo repellat reprehenderit quam.',
      featured : true
    },
    {
      id : '2',
      name : 'Shlok',
      icon: 'assets/linkdin.jpg',
      title : 'CEO Of Flipcart',
      img : 'assets/p2.jpg',
      desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Explicabo repellat reprehenderit quam.'
    }
  ]
  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className="container">
        {page1.map(p => (
        <div className={p.featured ? 'card featured' : 'card'}>
          <div className="top">
            <img src="assets/right arrow2.png" className='left' alt="" />
            <img src={p.img} className='user' alt="" />
            <img src={p.icon} className='right' alt="" />
          </div>
          <div className="center">{p.desc}</div>
          <div className="bottom">
            <h3>{p.name}</h3>
            <h4>{p.title}</h4>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials