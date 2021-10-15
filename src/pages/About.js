import React from 'react'
import { Link,graphql} from 'gatsby'
import Layout from '../components/Layout'
import{StaticImage} from 'gatsby-plugin-image'
import AllRecipesList from '../components/AllRecipesList'
import Seo from '../components/Seo'

const About=({data})=> {
  const recipes= data.allContentfulReceipe.nodes
  
  return (
    <Layout>
      <Seo title='About'/>
  <main className="page">
    <section className='about-page' >
      <article >
        <h2>I'm baby coloring book poke taxidermy</h2>
        <p>    Taxidermy forage glossier letterpress heirloom before they sold
              out you probably haven't heard of them banh mi biodiesel chia.     </p>
        <p>  Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
              retro.</p>
              <Link to='/Contact' className='btn'>Contact</Link>
      </article>
      <StaticImage src="../Assets/images/about.jpeg" alt="Person Pouring Salt in Bowl"
      className='about-img'
      placeholder='blurred'
      />
    </section>
    <section className='featured-recipes'>
    <h5>Look at this awesomesouce</h5>
    <AllRecipesList  recipes={recipes}/>
    </section>
  </main>
  
    </Layout>
  )
  
}
export const query = graphql`
  {
    allContentfulReceipe(
      sort: {fields: title, order: ASC}
      filter: {features: {eq: true}}
    ) {
      nodes {
        title
        prepTime
        serving
        cookTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      totalCount
    }
  }
`

export default About
