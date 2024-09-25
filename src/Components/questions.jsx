import React from 'react'

export default function Questions() {
    return (
        <div className='w-full flex px-32 gap-10 mt-[10rem] py-32'>
            <div className='w-1/4 h-full '>
                <h1 className='text-4xl font-semibold mt-5 text-[#A1A1AA]'>Frequently-asked questions</h1>
            </div>
            <div className='w-9/12 h-full '>
                <div className='mt-5 flex flex-col gap-3'>
                    <h1 className='text-2xl text-[#71717A] font-semibold'>Do I need to fill all sections ?</h1>
                    <p className='text-lg text-[#71717A] font-medium'>Not at all, only GitHub username is mandatory, all the other sections are optional. It's all your choice, you can fill them depending on your requirement, you have all the options for customisation.</p>
                </div>
                <div className='mt-16 flex flex-col gap-3'>
                    <h1 className='text-2xl text-[#71717A] font-semibold'>Do I need to know  Markdown or HTML for using this website?</h1>
                    <p className='text-lg text-[#71717A] font-medium'>This is a complete No-Code solution so you don't need any coding experience. You just have to fill sections and
                        we will create a perfect GitHub Profile ReadMe for you for free! Sounds cool? Try now!</p>
                </div>
                <div className='mt-16 flex flex-col gap-3'>
                    <h1 className='text-2xl text-[#71717A] font-semibold'>How to change GitHub ReadMe?</h1>
                    <p className='text-lg text-[#71717A] font-medium'>If you already have your personal repository (personal repository name is same as your GitHub username) then you can copy paste the code generated from GPRM in your ReadMe file. If you don't have your personal repository then follow this :<br/>
                        Step 1 : Go to https://github.com/new and enter the same name as your GitHub username into the Repository name field.<br/>
                        Step 2 : Leave the repo as a Public repo (by default).<br/>
                        Step 3 : Also, make sure to initialize it with a README to get started.<br/>
                        Step 4 : Paste the code generated from this website inside your ReadMe file.<br/>
                        Step 5 : Commit the changes to add a ReadMe to your GitHub Account.</p>
                </div>
            </div>

        </div>
    )
}
