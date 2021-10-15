import React from 'react'
import {graphql,Link} from 'gatsby'
import{GatsbyImage,getImage} from 'gatsby-plugin-image'
import {BsClockHistory,BsClock,BsPeople} from 'react-icons/bs'
import Layout from '../components/Layout'
import slugify from 'slugify'
import Seo from '../components/Seo'

function RecipeTemplate({data}) {
  const{title,cookTime,prepTime,serving,description:{description},image,content}= data.contentfulReceipe
  const{ingredients, instructions, tags,tools}=content
    const getToImage=getImage(image)
    return (
      <Layout>
        <Seo title={title} description={description}/>
        <main className='page'>
          <div className='recipe-page'>
          <section className='recipe-hero'>
            <GatsbyImage image={getToImage} alt={title} className='about-img'/>
            
            <article className='recipe-info'>
              <h2>{title}</h2>
              <p>{description}</p>
              <div className='recipe-icons'>
              <article>
                <BsClock/>
                <h5>Prep Time</h5>
                <p>{prepTime}min.</p>
              </article>
              <article>
                <BsClockHistory/>
                <h5>Cook Time</h5>
                <p>{cookTime}min.</p>
              </article>
              <article>
                <BsPeople/>
                <h5>Serving</h5>
                <p>{serving}</p>
              </article>
              </div>
              <p className='recipe-tags'>
                Tags:
                {
                  
                  tags.map((tag,index)=>{
                    const slug=slugify(tag,{lower:true})
                    return(
                      
                      <Link to={`/tags/${slug}` } key={index}>
                      {tag}
                    </Link>
                    )
                  
                  })
                }
                  
              </p>
              <div className='nav-link contact-link'>
            <Link to='' className='btn'>Order Now</Link>
          </div>
            </article>
          </section>
          <section className='recipe-content'>
            <article>
              <h4>Instructions</h4>
              {
                instructions.map((item,index)=>{
                  return(
                    <div key={index} className='single-instruction'>
                      <header>
                        <p>Step{index+1}</p>
                        <div></div>
                      </header>
                      <p>{item}</p>
                    </div>
                  )
                })
              }
            </article>
            <article className='second-column'>
              <div>
                <h4>Ingredients</h4>
                {
                  ingredients.map((item,index)=>{
                    return(
                      <p key={index} className='single-ingredient'>{item}</p>
                    )
                  })
                }
              </div>
              <div>
                <h4>Tools</h4>
                {
                  tools.map((item,index)=>{
                    return(
                      <p key={index} className='single-tool'>{item}</p>
                    )
                  })
                }
              </div>
            </article>
          </section>
          </div>
           
            
        </main>

      </Layout>
        
    )
}

export const query = graphql`
query MyQuery($title:String) {
  contentfulReceipe( title: {eq: $title}) {
    cookTime
    prepTime
    serving
    title
    description {
      description
    }
    image {
      gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
    }
    content {
      ingredients
      instructions
      tags
      tools
    }
  }
}
`

export default RecipeTemplate
