import React from 'react'

export default function Media() {
    return (
        <div className='w-full  py-[5rem] px-11'>
            <div className='w-full h-full  flex justify-center items-center'>
                <div className='w-1/2 h-full flex justify-end items-center px-4'>
                    <div className='w-full h-32  flex flex-col gap-3'>
                        <h1 className='text-5xl font-bold text-end text-[#86EFAC]'>Our Social Links</h1>
                        <p className='text-xl font-semibold text-end text-[#63687A]'>We are available on X, LinkedIn, and GitHub. You can connect with us to
                            get notification about any new feature we add, any cool product we create or get early
                            access of some cool projects !

                        </p>
                        <div className='flex gap-4 justify-end mt-6'>
                            <button type='submit' className='text-xl py-3 px-6 text-center bg-[#86EFAC] rounded-full flex items-center justify-center gap-2'>
                                Linkedin
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4 h-4 mr-2" viewBox="0 0 16 16"><path d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path></svg>

                            </button>
                            <button type='submit' className='text-xl py-3 px-6 text-center bg-[#86EFAC] rounded-full flex items-center justify-center gap-2'>
                                X
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4 h-4 mr-2" viewBox="0 0 16 16"><path d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path></svg>

                            </button>
                            <button type='submit' className='text-xl py-3 px-6 text-center bg-[#86EFAC] rounded-full flex items-center justify-center gap-2'>
                                GitHub
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4 h-4 mr-2" viewBox="0 0 16 16"><path d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path></svg>

                            </button>
                            <button type='submit' className='text-xl py-3 px-6 text-center bg-[#86EFAC] rounded-full flex items-center justify-center gap-2'>
                                Instagram
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4 h-4 mr-2" viewBox="0 0 16 16"><path d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path></svg>

                            </button>
                            

                        </div>
                    </div>
                </div>
                <div className='w/1/2 flex justify-center items-center p-[5rem]  box-border'>
                    <div className='w-full h-full'>
                        <img src="https://gprm.itsvg.in/socials.svg" alt="" className='object-cover '/>
                    </div>
                </div>
            </div>
        </div>
    )
}
