import React from 'react'

function Services() {
    return (
        <section id='services' className='w-full h-[80vh] p-[10px]'>
            <div className='container flex-col justify-evenly'>
                <h1 className='heading text-[#30333f]'>My Services</h1>
                <div className='w-full flex justify-evenly gap-10 flex-wrap'>
                    <div className='w-[330px] bg-[#eee] p-8 hover:bg-[#f6bf73] hover:translate-y-[-20px] shadow duration-300 unique-radius'>
                        <img src="frontendIcon.png" alt="frontend icon" />
                        <h1 className='text-2xl mb-2'>Frontend Development</h1>
                        <p className='mb-2'>I build responsive and interactive user interfaces that provide a seamless experience across all devices.</p>
                    </div>
                    <div className='w-[330px] bg-[#eee] p-8 hover:bg-[#f6bf73] hover:translate-y-[-20px] shadow duration-300 unique-radius'>
                        <img src="backendIcon.png" alt="backend icon" />
                        <h1 className='text-2xl mb-2'>Backend Development</h1>
                        <p className='mb-2'>I develop secure RESTful APIs to optimizing database queries, I focus on building scalable and reliable systems that handle your data with care.</p>
                    </div>
                    <div className='w-[330px] bg-[#eee] p-8 hover:bg-[#f6bf73] hover:translate-y-[-20px] shadow duration-300 unique-radius'>
                        <img src="fullstackIcon.png" alt="fullstack icon" />
                        <h1 className='text-2xl mb-2'>Full Stack Development</h1>
                        <p className='mb-2'>As full stack developer, I offer end to end web development service to deliver a complete, polish product.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services