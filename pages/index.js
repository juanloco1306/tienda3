import React, { useEffect } from 'react';
import { motion } from 'framer-motion'

import { client } from '../lib/client';
import Image from 'next/image'

import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => {
  return(
    <>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
    <div className="about section container" id="about">
        <br/>
                <div className="about__container grid">
                    


                    <div className="about__data">
                        <motion.h2 transition={{duration: 3, type: "tween"}}  initial={{ y: 100, x: 50, opacity: 0, scale: 0 }}     whileInView={{y: 0, x: 0, opacity: 1, scale: 1}} 
    viewport={{ once: true }} className="section__title about__title">
                            Reino Fungi
                        </motion.h2>

                        <motion.p transition={{duration: 4, type: "tween"}}  initial={{ y: 100, x: 50, opacity: 0, scale: 0 }}     whileInView={{y: 0, x: 0, opacity: 1, scale: 1}}
    viewport={{ once: true }} className="about__description">
                            Muchos creen que los hongos y las plantas son bastantes cercanos pero en realidad son mas parecidos a los animales, principalmente por su pared celular, ademas de ser organismos multicelulares, es decir, estan formados por varias celulas que estan conectados entre si.
                        </motion.p>

                        <motion.div transition={{duration: 5, type: "tween"}}  initial={{ y: 100, x: 50, opacity: 0, scale: 0 }}     whileInView={{y: 0, x: 0, opacity: 1, scale: 1}}
    viewport={{ once: true }} className="about__details">
                            <p className="about__details-description">
                                <i className="ri-checkbox-fill about__details-icon"></i>
                                El hongo de la penicilina ayuda con enfermedades
                            </p>
                            <p className="about__details-description">
                                <i className="ri-checkbox-fill about__details-icon"></i>
                                Ayuda a las plantas y arboles a comunicarse
                            </p>
                            <p className="about__details-description">
                                <i className="ri-checkbox-fill about__details-icon"></i>
                                El hongo de la levadura es indispensable para el pan y la cerveza
                            </p>
                            <p className="about__details-description">
                                <i className="ri-checkbox-fill about__details-icon"></i>
                                Sin ellos no habria vida en la tierra
                            </p>
                        </motion.div>


                    </div>
                    <Image src="/img/champi1.jpg" width={380} height={400} className="about__img"></Image>
                    <br/>
                </div>
            </div>
            <br/>


            <div className="steps section container">
                <div className="steps__bg">
                    <h2 className="section__title-center steps__title">
                        Como adentrarte en el extraño <br/> y fascinante mundo de los hongos
                    </h2>

                    <div className="steps__container grid">
                        <motion.div transition={{type: "spring", duration: 5}}  initial={{ opacity:0 }}     whileInView={{ opacity: 1, }}
    viewport={{ once: true }}  className="steps__card">
                            <div className="steps__card-number">01</div>
                            <h3 className="steps__card-title">Escoge tu Hongo</h3>
                            <p className="steps__card-description">
                                Diseñamos increibles terrarios con amplia variedad de hongos
                            </p>
                        </motion.div>

                        <motion.div transition={{type: "spring", duration: 7}}  initial={{ opacity:0 }}     whileInView={{ opacity: 1, }}
    viewport={{ once: true }}   className="steps__card">
                            <div className="steps__card-number">02</div>
                            <h3 className="steps__card-title">Ordena</h3>
                            <p className="steps__card-description">
                                Realiza tu pedido e ingresa la direccion de entrega
                            </p>
                            </motion.div>

                            <motion.div transition={{type: "spring", duration: 9}}  initial={{ opacity:0 }}     whileInView={{ opacity: 1, }}
    viewport={{ once: true }}  className="steps__card">
                            <div className="steps__card-number">03</div>
                            <h3 className="steps__card-title">Recibe</h3>
                            <p className="steps__card-description">
                                Nuestro proceso de entrega es rapido y eficiente, recibiras tus hongos lo mas pronto posible
                            </p>
                            </motion.div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
    <div className='product section container'>
      <h2 className='section__title-center'>Nuestros Hongos</h2>
      
 
      

      <div className='product__container grid'>
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>
      </div>
      <br/>

<FooterBanner />
    </>
  )
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }

}

export default Home;
