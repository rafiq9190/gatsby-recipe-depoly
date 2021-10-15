import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import AllRecipes from '../components/AllRecipes'
import Seo from '../components/Seo'

function Recipes() {
  return (
    <Layout>
      <Seo title='Recipe'/>
     <main className='page'>
      <AllRecipes/>
     </main>
    </Layout>
  )
}

export default Recipes
