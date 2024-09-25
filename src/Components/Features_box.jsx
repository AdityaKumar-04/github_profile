import React from 'react'

export default function Features_box(props) {
    return (
        <div className='flex gap-2 '>
            <div className=' px-2  '>
                <div className='flex items-center justify-center p-3 bg-[#86EFAC] rounded-lg'>
                    
                    {props.logo}
                </div>
            </div>
            <div className='flex flex-col '>
                <h1 className='text-xl font-semibold text-[#BBF7D0]'>{props.title}</h1>
                <p className='text-[#6B7280] text-lg'>{props.disp}</p>
            </div>
        </div>
    )
}
