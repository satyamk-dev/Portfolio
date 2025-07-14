import React from 'react'
import { Link } from 'react-router-dom'
import ElephantWalk from './ElephantWalk';



function Intro() {

  const goEducation = () => {
    let section = document.getElementById('Edu');

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

  }


  return (



    <>

      <div className="flex flex-col items-center justify-center w-full h-screen bg-white text-gray-800 px-4 ">
      <ElephantWalk/>

        <h1 className="text-3xl font-bold my-10 mb-4 text-center md:text-4xl lg:text-6xl">Hi, I’m <br /><span className="text-blue-600 text-6xl md:text-8xl lg:text-9xl" >Satyam Kumar</span></h1>
        <p className="text-2xl font-extralight text-center max-w-5xl md:text-3xl lg:text-4xl">
          I'm a passionate Full Stack Java Developer who loves building web apps using Spring Boot, React, and Java.
        </p><br />
        <div className='flex justify-center items-center gap-2 w-full'>
          <Link to='https://github.com/satyamk-dev'><button className=' text-xl text-white bg-gray-700 w-25 hover:bg-gray-800'>Git Hub</button></Link>
          <Link to='https://www.linkedin.com/in/satyamk-dev/'> <button className='text-xl text-white bg-blue-700 w-25 hover:bg-blue-800 '>LinkedIn</button></Link>
<a href="SATYAM KUMAR(F).pdf" download="Satyam_Resume.pdf">
  <button className="text-xl text-white bg-red-700 w-25 hover:bg-red-800">
    Resume
  </button>
</a>

        </div>
<br /><br /> <br />
      <div onClick={goEducation} className=' h-20 w-50 bg-white flex justify-center items-center rounded-2xl hover:bg-red-50'>

        <div onClick={goEducation} className='h-2  w-2 border-b border-e  border-b-blue-600  border-e-blue-600 rotate-45 animate-ping
         hover:border-b-red-600 hover:border-e-red-600' />
</div>


      </div>




    </>
  )
}

export default Intro