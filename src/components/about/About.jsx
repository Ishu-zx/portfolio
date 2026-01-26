import React from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Skills from './Skills'
import Education from './Education'

function About() {
    return (
        <section id='about' className='w-full h-[80vh] bg-[#fdf4e7] p-[10px]'>
            <div className='container flex-col justify-center'>
                <div className='flex w-full justify-evenly flex-wrap'>
                    <div id='about-profile-box' className='w-[300px] h-[330px] relative overflow-hidden flex justify-center'>
                        <div id='about-profile' className='w-full h-[250px] rounded-2xl bg-[#ffc678] absolute bottom-0'>
                            <img className='w-[100%] rounded-2xl absolute bottom-0 hover:scale-107 duration-300' src="/mypic2.png" alt="" />
                        </div>
                    </div>
                    <div id='about-desc' className='w-[50%] text-[#30333f]'>
                        <h1 className='heading '>About Me</h1>
                        <p>Hi, I’m Ishu - MERN stack developer who loves turning ideas into interactive, user-friendly web apps. I developed some small projects with MERN stack and excited to develop more applications by which I'll gain expertise in this tech stack.</p>
                        <div className='mt-1'>
                            <nav id='about-nav'>
                                <ul className='flex gap-5 mb-2'>
                                    <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#b97400] active:text-[#bf8522] duration-200' : 'hover:text-[#f0b044] active:text-[#bf8522] duration-200'} href='#'>Skills</NavLink>
                                    <NavLink to='/ed' className={({ isActive }) => isActive ? 'text-[#b97400] active:text-[#bf8522] duration-200' : 'hover:text-[#f0b044] active:text-[#bf8522] duration-200'}
                                    >Education</NavLink>
                                </ul>
                            </nav>
                            <div>
                                <Routes>
                                    <Route path='/' element={<Skills />} />
                                    <Route path='/ed' element={<Education />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About