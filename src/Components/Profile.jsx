import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
const items = ['Perfect', 'Beautiful', 'Modern', 'Interactive'];
const colors = ['#BBF7D0', '#FECDD3', '#A2EFF8', '#FDE68A']; // Define your colors here


export default function Profile() {
    const [currentItem, setCurrentItem] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentItem(prevItem => (prevItem + 1) % items.length);
        }, 3000); // Change every 3 seconds
        return () => clearInterval(interval);
    }, []);
    return (
        <div className='bg-[#18181B] flex justify-between '>
            <div className='w-1/2 py-[10vw] px-6'>
                <h1 className='text-[7vw] font-semibold text-[#BBF7D0] leading-[7vw]'>Best Profile <br />Generator</h1>
                <div className='flex mt-10 w-[60%] border-b-2 border-[#BBF7D0] py-2 justify-between items-center gap-2'>
                    <input type="text" className='w-full bg-transparent border-none outline-none text-[#BBF7D0] text-2xl' placeholder='Enter Your Github Username' /> <FaArrowRightLong className='text-2xl text-[#BBF7D0]' />

                </div>
                <div className='mt-14 gap-2 flex text-5xl h-14 overflow-hidden'>
                    <span className='text-[#71717A] font-semibold'>Create</span>

                    {/* <div className='flex flex-col justify-between items-center'>{['Profile', 'Beautiful', 'Modern', 'Interactive'].map((items, index) => {
                        return <span key={index} className=''>{items}</span>
                    })}</div> */}
                    <div className='flex flex-col justify-between items-center h-14'>
                        {items.map((item, index) => (
                            <motion.span
                                key={index}
                                initial={{ y: '100%' }}
                                animate={{ y: index === currentItem ? '0%' : '100%', color: colors[index % colors.length] }}
                                transition={{ duration: 1 }}
                                className={`${index === currentItem ? 'block' : 'hidden'} border-dashed border-b-4`}

                            >
                                {item}
                            </motion.span>
                        ))}
                    </div>

                    <span className='text-[#71717A] font-semibold'>Profile</span>
                </div>

            </div>
            <div className='w-1/2 flex justify-center items-center'>
                <img src="https://gprm.itsvg.in/hpill.svg" alt="" className='object-cover w-[35vw]' />
            </div>
        </div>
    )
}
