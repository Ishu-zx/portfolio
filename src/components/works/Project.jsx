import React, { useCallback, useEffect, useState } from 'react'

function Project({ title = 'MyTitle', desc = "MyDescription", imgUrl, href }) {
    return (
        <div className='w-[300px] h-[350px] text-[#30333f] unique-radius relative rotate duration-800 box-shadow'>
            <div className='w-[100%] h-[100%] absolute '>
                <img className='w-[100%] h-[100%] object-cover backface-hidden unique-radius' src={imgUrl} alt="" />
            </div>
            <div className='p-5 w-[100%] h-[100%] bg-[#ffc678] re-unique-radius absolute backface-hidden rotate-y-[180deg] flex justify-center items-center'>
                <div>
                    <h1 className='text-2xl mb-3'>{title}</h1>
                <p className='mb-3'>{desc}</p>
                <div className='flex pt-0 justify-end'>
                    <a href={href} target='_blank' className='btn w-[60px] h-[35px] text-base/[35px] text-[#ffc678] bg-[#30333f] hover:bg-[#1e212b] active:scale-95 duration-100' >Visit</a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Project