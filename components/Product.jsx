import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { urlFor } from '../lib/client'

const Product = ({product: {image,name,slug,price}}) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
                          <motion.div transition={{duration: 2}}  initial={{ scale:0, opacity:0 }}     whileInView={{ scale:1, opacity: 1 }}
        viewport={{ once: true }} className="product__card">
                        <div className="product__circle"></div>

                        <img src={urlFor(image && image[0])}
          className="product__img"
          />

                        <h3 className="product__title">{name}</h3>
                        <span className="product__price">${price}</span>

                        <button className="button--flex product__button">
                            <i className="ri-shopping-bag-line"></i>
                        </button>
                    </motion.div>
                  </Link>
    </div>
  )
}

export default Product