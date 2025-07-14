import React from 'react'
import Navbar from '../Components/fonts/Navbar'
import Intro from '../Components/fonts/Intro'
import Education from '../Components/Education'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import Tasks from '../Components/Tasks'
import Footer from '../Components/Footer'






function Home() {
    return (
        <>

            <div id='home' className='h-full w-full flex items-center flex-col'>
                {/* <Navbar />
                <Intro /> */}
                 <Education />
                {/* <Skills /> 
                <Projects />
                <Tasks />

                <Footer /> */}

            </div >

        </>
    )
}

export default Home