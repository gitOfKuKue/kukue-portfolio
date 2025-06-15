import React from 'react'

const ProjectCountCard = ({item}) => {
    console.log(item[1].length);
  return (
    <>
        <div className='bg-iconic text-font py-4 px-6 rounded-lg w-full '>
            <p className='text-md'>{item[0]}</p>
            <h1 className='text-2xl font-bold'>{item[1].length} Projects</h1>
        </div>
    </>
  )
}

export default ProjectCountCard