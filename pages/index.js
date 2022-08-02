import React, { useEffect } from 'react';


import { client } from '../lib/client';
import Image from 'next/image'

import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => {
  return(
    <>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
    <div className="about section container" id="about">
                <div className="about__container grid">
                    <Image src="/img/about.png" width={280} height={300} className="about__img"></Image>

                    <div className="about__data">
                        <h2 className="section__title about__title">
                            Who we really are & <br/> why choose us
                        </h2>

                        <p className="about__description">
                            We have over 4000+ unbiased reviews and our customers 
                            trust our plant process and delivery service every time
                        </p>

                        <div className="about__details">
                            <p className="about__details-description">
                                <i className="ri-checkbox-fill about__details-icon"></i>
                                We always deliver on time.
                            </p>
                            <p className="about__details-description">
                                <i className="ri-checkbox-fill about__details-icon"></i>
                                We give you guides to protect and care for your plants.
                            </p>
                            <p className="about__details-description">
                                <i className="ri-checkbox-fill about__details-icon"></i>
                                We always come over for a check-up after sale.
                            </p>
                            <p className="about__details-description">
                                <i className="ri-checkbox-fill about__details-icon"></i>
                                100% money back guaranteed.
                            </p>
                        </div>


                    </div>
                </div>
            </div>
            <br/>


            <div className="steps section container">
                <div className="steps__bg">
                    <h2 className="section__title-center steps__title">
                        Steps to start your <br/> plants off right
                    </h2>

                    <div className="steps__container grid">
                        <div className="steps__card">
                            <div className="steps__card-number">01</div>
                            <h3 className="steps__card-title">Choose Plant</h3>
                            <p className="steps__card-description">
                                We have several varieties plants you can choose from.
                            </p>
                        </div>

                        <div className="steps__card">
                            <div className="steps__card-number">02</div>
                            <h3 className="steps__card-title">Place an order</h3>
                            <p className="steps__card-description">
                                Once your order is set, we move to the next step which is the shipping.
                            </p>
                        </div>

                        <div className="steps__card">
                            <div className="steps__card-number">03</div>
                            <h3 className="steps__card-title">Get plants delivered</h3>
                            <p className="steps__card-description">
                                Our delivery process is easy, you receive the plant direct to your door.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
    <div className='product section container'>
      <h2 className='section__title-center'>Best selling products</h2>
      <p className='product__description'>Speakers</p>
 
      

      <div className='product__container grid'>
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>
      </div>


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
