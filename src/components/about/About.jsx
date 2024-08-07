import React from 'react'
import './about.css'
import ME from '../../assets/me3.png'
import { FaAward } from 'react-icons/fa'
import { AiFillProject } from 'react-icons/ai'
import {FaConnectdevelop} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
            <div className="about__me-image">
            <img src={ME} alt="About Image" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward/>
                <h5>Experience</h5>
                <small>4+ years</small>
            </article>

            <article className='about__card'>
                <AiFillProject/>
                <h5>Project Management</h5>
                <small>1-2 years</small>
            </article>

            <article className='about__card'>
                <FaConnectdevelop/>
                <h5>Web Development</h5>
                <small>3-4 years</small>
                
            </article>
          </div>
          
          <p>A motivated professional with an engineering background and 
4 years of IT experience, I am now exploring web and mobile app 
development, particularly focusing on frontend development. I 
excel in analyzing and solving complex problems, whether 
independently or as part of a team. With extensive experience in 
React and React Native, I bring a strong foundation in building 
user interfaces and implementing responsive designs. Eager to 
leverage my technical and analytical expertise, I am committed to 
contributing to the development of innovative and impactful web 
applications
</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About