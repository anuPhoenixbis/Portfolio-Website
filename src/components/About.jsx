import React from 'react'
import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
        <div className='align-element grid md:grid-cols-2 items-center gap-16' >
            <img src={aboutSvg} className='w-full h-64'/>
            <article>
                <SectionTitle text='Components and Caffeine'/>
                <p className='text-slate-600 mt-8 leading-loose'>
                I’m a Computer Science undergraduate focused on building scalable backend systems 
                and applied AI solutions. With strong DSA fundamentals and hands-on experience across 
                ML and full-stack development, I enjoy turning complex ideas into production-ready applications.
                </p>
            </article>
        </div>
    </section>
  )
}

export default About