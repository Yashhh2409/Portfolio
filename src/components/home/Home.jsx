import React from 'react'
import "./home.css"
import Social from './Social'
import Data from './Data'
import ScrollDown from './ScrollDown'

//motion
import {motion} from 'framer-motion'

//variants
import {fadeIn} from '../../variants'

const Home = () => {

    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />

                    <motion.div 
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false, amount: 0.7}}

                    className="home__img">
                    </motion.div>

                    <Data />
                </div>
                
                <ScrollDown />
            </div>
        </section>
    )
}

export default Home
