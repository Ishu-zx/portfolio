import React from 'react'

function Hero() {
    return (
        <section id='home'>
            <div className='w-full h-screen bg-linear-to-b from-[#f0b044] to-[#fff] text-white p-5 flex justify-evenly items-center'>
                <div id='hero-text-box' className='text-[#30333f]'>
                    <h1 id='hero-text' className='text-[4.8rem]'><span id='span1'>Your Vision,</span><br /><span id='span2'>My Code,</span><br /><span id='span3'>MERN Delivered</span></h1>
                    <a href="#" className='btn w-[160px] h-[40px] text-base/[40px] bg-[#f0b044] hover:bg-[#bf8522] active:scale-97 duration-100' title='Available Soon'>Hire</a>
                    <a href="#about" className='btn w-[160px] h-[40px] text-base/[40px] border-[#f0b044] border-1 bg-[transparent] hover:bg-[#f0b044] active:scale-97 duration-100'>About Me</a>
                </div>
                <div id='hero-img-box' className='w-[400px] h-[470px] rounded-bl-[200px] rounded-br-[200px] overflow-hidden relative'>
                    <div className='w-[400px] h-[400px] rounded-[50%] absolute bottom-0 shadow text-center bg-[#f0b044]'>
                        <img className=' w-[100%] absolute bottom-0 hover:scale-107 duration-300' src="mypic.png" alt="MyImg" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero