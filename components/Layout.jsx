import React from 'react'
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" />
        <title>JS Mastery Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>
        {children} 
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout