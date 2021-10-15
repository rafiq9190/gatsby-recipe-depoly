import React from 'react'
import {graphql} from 'gatsby'
import AllRecipesList from '../components/AllRecipesList'
import Layout  from '../components/Layout'
import Seo from '../components/Seo'

function Template({data,pageContext}) {
    console.log(data)
    const recipes= data.allContentfulReceipe.nodes

    return (
        <Layout>
          <Seo title={pageContext.tag}/>
                <main className='page'>
                    <h2>{pageContext.tag}</h2>
                    <div className='tag-recipes'>
                        <AllRecipesList recipes={recipes}/>
                    </div>
                </main>
        </Layout>
    )
}

export const query = graphql`
query MyRecipeTag($tag:String) {
    allContentfulReceipe(
      sort: {fields: title, order: DESC}
      filter: {content: {tags: {eq: $tag}}}
    ) {
      nodes {
        cookTime
        prepTime
        title
        id
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
  
`

export default Template
