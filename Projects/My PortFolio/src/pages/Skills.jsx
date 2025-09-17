import React from 'react'

const Skills = () => {
    return (
        <div className='w-full pt-20 bg-color1 min-h-screen flex flex-col gap-20 items-center pb-20'>
            <h1 className='text-4xl border-4 border-black p-3'>Skills</h1>
            <div className='w-1/2 flex flex-wrap gap-40'>
                <div>
                    <h2>Development Skills:</h2>
                    <div>
                        <div className='flex flex-col gap-2 items-center'>
                            <img className='w-[100px] h-[100px]' src="/src/assets/html.png" alt="html" />
                            <h2 className='text-xl font-semibold'>HTML</h2>

                        </div>
                        <div className='flex flex-col gap-2 items-center'>
                            <img className='w-[100px] h-[100px]' src="/src/assets/css.png" alt="html" />
                            <h2 className='text-xl font-semibold'>CSS</h2>

                        </div>
                        <div className='flex flex-col gap-2 items-center'>
                            <img className='w-[100px] h-[100px]' src="/src/assets/js.svg" alt="html" />
                            <h2 className='text-xl font-semibold'>JavaScript</h2>

                        </div>
                        <div className='flex flex-col gap-2 items-center'>
                            <img className='w-[100px] h-[100px]' src="/src/assets/express.png" alt="html" />
                            <h2 className='text-xl font-semibold'>Express</h2>

                        </div>
                        <div className='flex flex-col gap-2 items-center'>
                            <img className='w-[100px] h-[100px]' src="/src/assets/react.svg" alt="html" />
                            <h2 className='text-xl font-semibold'>React</h2>

                        </div>
                        <div className='flex flex-col gap-2 items-center'>
                            <img className='w-[100px] h-[100px]' src="/src/assets/nodejs.svg" alt="html" />
                            <h2 className='text-xl font-semibold'>Node</h2>

                        </div>
                    </div>
                </div>


                <div className='flex flex-col gap-2 items-center'>
                    <img className='w-[100px] h-[100px]' src="/src/assets/c.png" alt="html" />
                    <h2 className='text-xl font-semibold'>C</h2>

                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <img className='w-[100px] h-[100px]' src="/src/assets/mongodb.svg" alt="html" />
                    <h2 className='text-xl font-semibold'>MongoDb</h2>

                </div>

                <div className='flex flex-col gap-2 items-center'>
                    <img className='w-[100px] h-[100px]' src="/src/assets/git.png" alt="html" />
                    <h2 className='text-xl font-semibold'>Git</h2>

                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <img className='w-[100px] h-[100px]' src="/src/assets/github.svg" alt="html" />
                    <h2 className='text-xl font-semibold'>Github</h2>

                </div>

                <div className='flex flex-col gap-2 items-center'>
                    <img className='w-[100px] h-[100px]' src="/src/assets/cpp.svg" alt="html" />
                    <h2 className='text-xl font-semibold'>C++</h2>

                </div>

                <div className='flex flex-col gap-2 items-center'>
                    <img className='w-[100px] h-[100px]' src="/src/assets/mysql.svg" alt="html" />
                    <h2 className='text-xl font-semibold'>MySQL</h2>

                </div>
            </div>

        </div>
    )
}

export default Skills