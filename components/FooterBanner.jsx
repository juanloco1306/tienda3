import React from 'react'
/*import Link from 'next/link'*/
import { motion } from 'framer-motion'
/*import { urlFor } from '../lib/client'*/

const FooterBanner = () => {
  return (
    <motion.div initial={{y: 300}} whileInView={{y:0}} 
     viewport={{ once: true }}  transition={{
        duration: 3 , type: "spring", stiffness: 100
      }} className="contact section container" id="contact">                
    <div className="contact__container grid">
    <div className="contact__box">
        <br/>
        <br/>
    <h2 className="section__title">
        Contactanos<br/> para resolver <br/> cualquier duda
    </h2>

    <div className="contact__data">

        <div className="contact__information">
            <h3 className="contact__subtitle">Escribenos a nuestro correo</h3>
            <span className="contact__description">
                <i className="ri-mail-line contact__icon"></i>
                fungidecoradores@gmail.com
            </span>
        </div>
    </div>
    </div>
    <div className="footer__content">
                    <br/>
                    <br/>
                    <div className="footer__content">
                    <h3 className="footer__title">Redes Sociales</h3>

                    <ul className="footer__data">

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