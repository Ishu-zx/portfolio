import React, { useState } from 'react'
import Project from './Project'

function Works() {
  return (
    <section id='works' className='w-full h-[90vh] bg-[#eee] p-[10px]'>
      <div className='container flex-col justify-evenly'>
        <h1 className='heading text-[#30333f] text-center'>My Work</h1>
        <div className='w-full flex gap-10 flex-wrap justify-evenly items-center'>
          <Project id='3' imgUrl='/todolist.jpg'
            title='TODO-List'
            desc='A lightweight task manager focused on clean CRUD functionality.'
            href='https://todo-list-db-o1j5.onrender.com/'
          />
          <Project id='1' imgUrl='/keeper.jpg'
            title='Keeper'
            desc='A full-stack MERN note-taking application. Features a React frontend and an Express/Node.js backend with MongoDB for persistent storage of notes.'
            href='https://keeper-db.netlify.app/'
          />

          <Project id='2' imgUrl='/secrets.jpg'
            title='Secrets'
            desc='A lightweight, anonymous web application designed for sharing secrets without leaving a paper trail. Simple, secure, and ephemeral.'
            href='https://secrets-h91m.onrender.com/login'
          />
        </div>
      </div>

    </section>
  )
}

export default Works