import React from 'react'
import {Link}from 'gatsby'
import {GatsbyImage ,getImage} from 'gatsby-plugin-image'
import slugify from 'slugify'


function AllRecipesList({recipes=[]}) {
    console.log(recipes)
    return (
        <div className='recipes-list'>
            
            {
                recipes.map((recipe,index)=>{
                    
                    const {id,title,image,prepTime,cookTime}=recipe
                   const slug=slugify(title,{lower:true})
                    const getToPath=getImage(image)
                    return (
                    <Link key={id} to={`/${slug}`} className='recipe'>
                        <GatsbyImage
                         image={getToPath}
                         className='recipe-img' 
                         alt={title}/>
                         <h5>{title}</h5>
                         <p>Prep:{prepTime}min | Cook:{cookTime}min</p>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default AllRecipesList
