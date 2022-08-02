import React from 'react'
/*import Link from 'next/link'*/
import { motion } from 'framer-motion'
/*import { urlFor } from '../lib/client'*/

const FooterBanner = () => {
  return (
    <motion.div whileInView={{
        scale: [.3, .4, .5, .7, 1]
     }}     
     viewport={{ once: true }}  transition={{
        duration: 5,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeatDelay: 1
      }} className="contact section container" id="contact">                
    <div className="contact__container grid">
    <div className="contact__box">
        <br/>
        <br/>
    <h2 className="section__title">
        Reach out to us today <br/> via any of the given <br/> information
    </h2>

    <div className="contact__data">
        <div className="contact__information">
            <h3 className="contact__subtitle">Call us for instant support</h3>
            <span className="contact__description">
                <i className="ri-phone-line contact__icon"></i>
                +999 888 777
            </span>
        </div>

        <div className="contact__information">
            <h3 className="contact__subtitle">Write us by mail</h3>
            <span className="contact__description">
                <i className="ri-mail-line contact__icon"></i>
                user@email.com
            </span>
        </div>
    </div>
    </div>
    <div className="footer__content">
                    <h3 className="footer__title">Our Address</h3>

                    <ul className="footer__data">
                        <li className="footer__information">1234 - Peru</li>
                        <li className="footer__information">La Libertad - 43210</li>
                        <li className="footer__information">123-456-789</li>
                    </ul>
                    <br/>
                    <div className="footer__content">
                    <h3 className="footer__title">Contact Us</h3>

                    <ul className="footer__data">
                        <li className="footer__information">+999 888 777</li>
                        
                        <div className="footer__social">
                            <a href="https://www.facebook.com/" className="footer__social-link">
                                <i className="ri-facebook-fill"></i>
                            </a>
                            <a href="https://www.instagram.com/" className="footer__social-link">
                                <i className="ri-instagram-line"></i>
                            </a>
                            <a href="https://twitter.com/" className="footer__social-link">
                                <i className="ri-twitter-fill"></i>
                            </a>
                        </div>
                    </ul>
                </div>
        </div>
        
    </div>
    </motion.div>




  )
}

export default FooterBanner