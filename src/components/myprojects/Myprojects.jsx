import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/img5.jpg'
import IMG2 from '../../assets/project_tracker.png'
import IMG3 from '../../assets/stripe.png'
const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Shoping Cart</h3>
            <small className='text-light'>ReactJs | NodeJs</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/RagavHats/shoppingCart" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Project Tracker</h3>
            <small className='text-light'>HTML | CSS | JS | ReactJs | NodeJs | MongoDb</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/RagavHats/PROJECT-TRACKER---MERN-STACK" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>Stripe Payment Integration</h3>
            <small className='text-light'>HTML | CSS | JS | ReactJs | NodeJs | MongoDb</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/RagavHats/Stripe-with-MERN-STACK" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article>
        
      </div>
    </section>
  )
}

export default Myprojects