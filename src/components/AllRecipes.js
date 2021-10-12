import React from 'react'
import TagsList from './TagsList'
import AllRecipesList from './AllRecipesList'
import {graphql,useStaticQuery} from 'gatsby'

const query = graphql`
  {
    allContentfulReceipe(sort: {fields: title, order: ASC}) {
      nodes {
        title
        id
        prepTime
        serving
        cookTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`


function AllRecipes() {
const data=useStaticQuery(query)
const recipes=data.allContentfulReceipe.nodes
console.log(recipes)

    return (
        <section className='recipes-container'>
            
            <TagsList recipes={recipes}/>
            <AllRecipesList recipes={recipes}/>
        </section>
    )
}

export default AllRecipes
