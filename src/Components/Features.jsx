import React from 'react'
import Features_box from './Features_box'

export default function Features() {

    return (
        <div className='w-full'>
            <div className='text-center flex flex-col gap-2 px-[25rem]'>
                <h1 className='text-xl text-[#86EFAC] uppercase font-semibold'>Features</h1>
                <h1 className='text-4xl font-semibold text-[#BBF7D0]'>We got everything that you need !</h1>
                <p className='text-xl font-semibold text-[#6B727B]'>Create your perfect GitHub Profile ReadMe in the best possible way. Lots of features and tools included, all for free !</p>
            </div>
            <div className='w-full px-[9.5rem] py-10 flex gap-5'>
                <div className=' w-1/2 flex flex-col gap-y-8 pr-8'>
                    <Features_box logo={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>} title={"Lightening fast Profile Creation"} disp={'Create your Profile ReadMe in just few clicks ! On an average, it takes less than one minute to create a perfect Profile ReadMe using GPRM'} />

                    <Features_box logo={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z">
                        </path>
                    </svg>}
                        title={"Flex Your GitHub Stats"}
                        disp={'Be Honest, everyone loves to flex their achievements. With tools such as ReadMe Stats, Most Used Languages, Streak Stats you can show your achievements.'} />
                    <Features_box
                        logo={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>}
                        title={"Visitor Counter"}
                        disp={'With the use of Visitors Counter you can see how many people viewed your profile, this gives you an idea about how popular you are on GitHub.'} />
                    <Features_box
                        logo={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>}
                        title={"Fun Components"}
                        disp={'If fun is required everywhere, how can it be missing from your profile ? Now, You can cheer up other people by adding Random Memes and Quotes in your profile.'} />


                </div>
                <div className=' w-1/2 flex flex-col gap-y-8 pr-8'>
                    <Features_box
                        logo={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>}
                        title={"Add all Social Links"}
                        disp={'We have added an option to add your Social Links to increase your reach and promote your works at one place.'} />

                    <Features_box logo={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>}
                        title={"Show Your Tech Stack"}
                        disp={'Select from over 300+ tech options and show your tech stack to everyone, Let them know what makes you awesome.'} />
                    <Features_box
                        logo={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
                        title={"Let people help you with Donations"}
                        disp={'No matter what your aim is, money is required at some point to boost the process for getting closer to your aim. We give you an option to add Donation Links directly into your profile so that people can help you by donating.'} />
                    <Features_box
                        logo={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path></svg>}
                        title={"GitHub Trophies"}
                        disp={'Got any trophies/medals but oops! how can you show them on your profile? Don t worry, GitHub Trophies are the virtual trophies for you. Showcase them by adding it to your profile.'} />


                </div>

            </div>
        </div>
    )
}
