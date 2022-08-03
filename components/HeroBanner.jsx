import React from 'react'
/*import Link from 'next/link'*/
import { motion } from 'framer-motion'

import { urlFor } from '../lib/client'

const HeroBanner = ({ heroBanner }) => {
  return (

        <motion.div transition={{ type: "spring", bounce: 0.25}}  initial={{ y: -300, opacity:0 }}     whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }} className="home" id="home">
                <div className="home__container container grid">
                <img src={urlFor(heroBanner.image)} className='home__img' alt="headphones" />

                    <div className="home__data">
                        <h1 className="home__title">
                        {heroBanner.largeText1}
                        </h1>
                        <p className="home__description">
                        {heroBanner.desc}
                        </p>
                    </div>

                    <div className="home__social">
                        <span className="home__social-follow">Follow Us</span>

                        <div className="home__social-links">
                            <a href="https://www.facebook.com/" target="_blank" className="home__social-link">
                                <i className="ri-facebook-fill"></i>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" className="home__social-link">
                                <i className="ri-instagram-line"></i>
                            </a>
                            <a href="https://twitter.com/" target="_blank" className="home__social-link">
                                <i className="ri-twitter-fill"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
    
  )
}

export default HeroBanner