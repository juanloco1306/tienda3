import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const Product = ({product: {image,name,slug,price}}) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
                          <div className="product__card">
                        <div className="product__circle"></div>

                        <img src={urlFor(image && image[0])}
          className="product__img"
          />

                        <h3 className="product__title">{name}</h3>
                        <span className="product__price">${price}</span>

                        <button className="button--flex product__button">
                            <i className="ri-shopping-bag-line"></i>
                        </button>
                    </div>
                  </Link>
    </div>
  )
}

export default Product