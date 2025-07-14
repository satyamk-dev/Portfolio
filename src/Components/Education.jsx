import React from 'react'

function Education() {
    const goSkill = () => {
        let section = document.getElementById('skill');

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }
    return (
        <>
            <div id='Edu' className='flex flex-col items-center bg-gray-900 w-full h-screen py-2'>
                <h1 className='text-3xl my-5 text-white font-bold md:text-4xl lg:text-7xl'>Education</h1>



{/* This is for Education view */}
<div className='bg-amber-200 h-fit w-full flex justify-around items-center flex-row'>

{/* This div for Detail of College */}
<div className='h-fit w-fit bg-red-300 border-b-lime-200 flex justify-around items-center flex-col'>

<h1>B.Tech</h1>
<p></p>
<h1>Diploma</h1>
<p></p>
<h1>10th</h1>
<p></p>

</div>

{/* This div for images and graph */}
<div>


</div >


</div>


                <div onClick={goSkill} className='h-8 w-8 rounded-2xl flex justify-center items-center bg-white'>
                    <div className='h-3 w-3 border-b-2 border-e-2 border-b-blue-900  border-e-blue-900 rotate-45 hover:border-b-red-600 hover:border-e-red-600' />
                </div>
            </div>
        </>
    )
}
export default Education;