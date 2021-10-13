import React from 'react'
import {graphgl} from 'gatsby'
import{GatsbyImage,getImage} from 'gatsby-plugin-image'
import {BsClockHistory,BsClock,BsPeople} from 'react-icons/bs'

function RecipeTemplate(data) {
  console.log(data)
    // const {title,cookTime,content,description:{description},serving,image}=data.contentfulReceipe
    // const getToImage=getImage(image)
    return (
        <div>
            <h2>Heloo from template page</h2>
            
        </div>
    )
}

export const query = graphql`
{
    contentfulReceipe(title: {eq: $title}) {
      title
      cookTime
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      serving
      prepTime
      image {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
  }
`

export default RecipeTemplate
