import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope , faPhone,} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';


function Contact() {
    const form = useRef(null)
    const name = useRef(null)
    const email = useRef(null)
    const message = useRef(null)
    const messageBox = useRef(null)
   
    useEffect(()=>{
        form.current.addEventListener('submit',(e)=>{
            
            if(name.current.value==''&&email.current.value==''&&message.current.value==''){
                messageBox.current.innerText='Empty Field!!'    
                messageBox.current.style.color='red'    
                e.preventDefault()
            }else{
                messageBox.current.style.color='green'    
                messageBox.current.innerText='Email sent successfully'
            }
        })
    })
  return (
    <section id='contact' className='bg-[#ffc678] w-full h-[100vh]'>
        <div className='container flex-col justify-evenly'>
            <div className='flex justify-evenly w-full'>
                <div className='w-[35%]'>
                    <h1 className='heading text-[#30333f]'>Contact Me</h1>
                    <h3 className='text-[1.2rem] -mt-3 mb-7'>I'd like to hear from you!</h3>
                    <div className='mb-3 flex gap-5'>
                        <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
                        <p>ishu.zx.dev@gmail.com</p>
                    </div>
                    <div className='mb-7 flex gap-5'>
                        <FontAwesomeIcon icon={faPhone} className="text-2xl" />
                        <p>(+91) 9996397190</p>
                    </div>
                    <div className='flex gap-3 '>
                        <a href='https://www.linkedin.com/in/ishu-zx' target='_blank'><FontAwesomeIcon icon={faLinkedin} className="text-2xl hover:text-[#0077b5] hover:translate-y-[-5px] duration-300" /></a>
                        <a href='https://github.com/Ishu-zx' target='_blankk'><FontAwesomeIcon icon={faGithub} className="text-2xl hover:text-black hover:translate-y-[-5px] duration-300" /></a>
                        <a href='#' title='Available Soon'><FontAwesomeIcon icon={faInstagram} className="text-2xl hover:text-[#833AB4] hover:translate-y-[-5px] duration-300" /></a>
                        <a href='#' title='Available Soon'><FontAwesomeIcon icon={faXTwitter} className="text-2xl hover:text-black hover:translate-y-[-5px] duration-300" /></a>
                    </div>
                </div>
                <div className='w-[50%]'>
                    <form ref={form} action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value="d90af229-ca6a-4ca4-a098-e005c50e2589" />
                        <input ref={name} type="text" name='name' placeholder='Your Name' 
                            className='w-full p-3 bg-[#fbf2e5] rounded-lg mb-2'
                        /> <br />
                        <input ref={email} type="email" name='email' placeholder='Your Email' 
                            className='w-full p-3 bg-[#fbf2e5] rounded-lg mb-2'
                        /> <br />
                        <textarea ref={message} id="message" placeholder='Your Message'
                            className='w-full h-[200px] p-3 bg-[#fbf2e5] rounded-lg mb-2'
                        ></textarea> <br />
                        <input type="submit" value='Send' 
                            className='btn w-[160px] h-[40px] text-base/[35px] text-[#ffc678] bg-[#30333f] hover:bg-[#1e212b] active:scale-95 duration-100'
                        />
                        <p ref={messageBox} className='mt-2 text-[.8rem]'></p>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact