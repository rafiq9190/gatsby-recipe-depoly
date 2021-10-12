import React from 'react'
import {graphgl} from 'gatsby'
import{GatsbyImage,getImage} from 'gatsby-plugin-image'
import {BsClockHistory,BsClock,BsPeople} from 'react-icons/bs'

function RecipeTemplate({data}) {
    const {title,cookTime,content,description:{description},serving,image}=data.contentfulReceipe
    const getToImage=getImage(image)
    return (
        <div>
            <h2>{title}</h2>
            {cookTime}
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
