import React from 'react'

import { client } from '../lib/client';

import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => {
  return(
    <>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
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
