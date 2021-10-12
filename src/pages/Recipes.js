import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import AllRecipes from '../components/AllRecipes'

function Recipes() {
  return (
    <Layout>
     <main className='page'>
      <AllRecipes/>
     </main>
    </Layout>
  )
}

export default Recipes
