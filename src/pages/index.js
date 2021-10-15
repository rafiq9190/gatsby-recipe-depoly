import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/Layout';
import {StaticImage} from 'gatsby-plugin-image'
import AllRecipes from '../components/AllRecipes';
import Seo from '../components/Seo'






function Index() {

  return (
    <Layout>
      <Seo title="Home"/>
     <main className='page'>
    <header className='hero'>
      <StaticImage
      src='../Assets/images/main.jpeg'
      alt='eggs'
      className='hero-img'
      placeholder='tracedSVG'
      layout="fullWidth"
      />
      <div className='hero-container'>
      <div className='hero-text'>
        <h1>simply recipes</h1>
        <h4>no fluff, just recipes</h4>
      </div>
      </div>

    </header>
     <AllRecipes/>
     </main>
    </Layout>
  )
}

export default Index
