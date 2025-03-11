import React from 'react'
import './about.css'
import myImage from '../../assets/photo.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>B.Tech Information Technology(UG) <br /><i>Jeppiaar Engineer College.</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>CGPA</h5>
                  <small>8.13</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>Website design </li>
                      <li>Ecomerence Platform</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
            <b>Senior Frontend & Full-Stack Developer | React.js, Next.js</b>
            <br></br>
Results-driven developer with 7.5 years of experience specializing in React.js and Next.js. Expertise in optimizing web performance, achieving a 20% improvement through server-side rendering, and driving audience engagement—boosting a podcast’s reach by 25% through strategic entrepreneur features. Passionate about building high-performance, user-centric web applications that deliver seamless experiences.

            </p>

          </div>
      </div>
    </section>
  )
}

export default About