import React from 'react'
import MembersCard from './MembersCard'

export default function Members() {
    return (
        <div className='w-full  px-[17rem] pb-32'>
            <div className='text-center '>
                <h1 className='text-6xl font-semibold text-[#86EFAC]'>Credits</h1>
                <p className='text-xl font-semibold  mt-3 text-[#6B7280]'>We believe in giving credit where it's due. To all the OG creators, we see you and #thank you for creating these awesome tools!</p>
            </div>
            <div className='w-full flex overflow-scroll scroll'>
                <MembersCard/>
                <MembersCard/>
                <MembersCard/>
                <MembersCard/>
                <MembersCard/>
                <MembersCard/>
                <MembersCard/>
                <MembersCard/>
                <MembersCard/>
                <MembersCard/>
                <MembersCard/>
                <MembersCard/>
            </div>
        </div>
    )
}
