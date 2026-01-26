import { useEffect, useRef, useState } from 'react'
import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

function Header() {
  const navLinks = useRef()
  const checkbox = useRef()
  const navigate = useNavigate()
  const location = useLocation()
  const [activeHash,setActiveHash] = useState(location.hash)
  const gotoSection = (id) => {
    navigate('/#'+id    )
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  const scrollEffect = () => {
    const sections = document.querySelectorAll('section')
    let current = ''
    Array.from(sections).map((sec) => {
      const rect = sec.getBoundingClientRect()
      
      if (rect.top <= 100 && rect.bottom >= 100) {
        current = '#'+sec.id
      }
      
    })
    if(current != activeHash){
      setActiveHash(current)
      navigate(current, {replace:true})
    }
  }

  //for side bar 
  const sidebarHandle=()=>{
    if(checkbox.current.checked){
      navLinks.current.style.transform='translateX(0)' 
    }else{
       navLinks.current.style.transform='translateX(100%)'
    }
  }

  const sidebarHandle2=()=>{
    if(checkbox.current.checked){
        checkbox.current.checked=false;
        navLinks.current.style.transform='translateX(100%)'
    }
  }
  

  useEffect(() => {
    scrollEffect()
     window.addEventListener("scroll", scrollEffect);
    return () => window.removeEventListener("scroll", scrollEffect);

  }, [activeHash,navigate])
  return (
    <header>
      <nav className='h-14 bg-[#fff] text-[#f0b044] fixed top-0 w-full shadow-2xl z-10'>
        <div className="container justify-between">
          <h1 className='text-2xl active:text-[#bf8522] duration-200'><a href='#'>Portfolio</a></h1>

          {/* hamburger */}
          <div id='hamburger'>
            <input ref={checkbox} type="checkbox" id='checkbox' onChange={sidebarHandle} />
            <label htmlFor="checkbox">
              <span className='lines line1'></span>
              <div className='lines line2'></div>
              <div className='lines line3'></div>
            </label>
          </div>
          <ul ref={navLinks} onClick={sidebarHandle2} className='flex gap-5 text-[#30333f]'>
            <NavLink className={location.hash == "#home" ? 'hover:text-[#f0b044] text-[#bf8522] duration-200' : 'hover:text-[#f0b044] active:text-[#bf8522] duration-200'}
              onClick={() => gotoSection('home')}
              to='#home'
            >
              Home
            </NavLink>
            <NavLink className={location.hash == "#about" ? 'hover:text-[#f0b044] text-[#bf8522] duration-200' : 'hover:text-[#f0b044] active:text-[#bf8522] duration-200'}
              onClick={() => gotoSection('about')}
              to='#about'
            >
              About
            </NavLink>
            <NavLink className={location.hash == "#works" ? 'hover:text-[#f0b044] text-[#bf8522] duration-200' : 'hover:text-[#f0b044] active:text-[#bf8522] duration-200'}
              onClick={() => gotoSection('works')}
              to='#works'
            >
              Works
            </NavLink>
            <NavLink className={location.hash == "#services" ? 'hover:text-[#f0b044] text-[#bf8522] duration-200' : 'hover:text-[#f0b044] active:text-[#bf8522] duration-200'}
              onClick={() => gotoSection('services')}
              to='#services'
            >
              Services
            </NavLink>
            <NavLink className={location.hash == "#contact" ? 'hover:text-[#f0b044] text-[#bf8522] duration-200' : 'hover:text-[#f0b044] active:text-[#bf8522] duration-200'}
              onClick={() => gotoSection('contact')}
              to='#contact'
            >
              Contact
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header