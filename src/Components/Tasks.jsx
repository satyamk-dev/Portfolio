import React from 'react'


function Tasks() {

    const goTeacher = () => {
        let section = document.getElementById('teacher');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <>

            <div id='task' className='flex flex-col justify-center items-center text-6xl bg-gray-600 w-full h-screen text-blue-50'>
                <h1 className='text-9xl'>Tasks</h1>
                <div className='h-30' />
                <div onClick={goTeacher} className='h-3 w-3 border-b-2 border-e-2 border-b-blue-100  border-e-blue-100 rotate-45 animate-ping hover:border-b-red-600 hover:border-e-red-600' />

            </div>


        </>
    )
}

export default Tasks