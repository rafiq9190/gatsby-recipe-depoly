import React from 'react'
import setUpTag from '../utilis/SetUpTag'
import {Link}from 'gatsby'
import slugify from 'slugify'

function TagsList({recipes}) {
    const newTag=setUpTag(recipes) 
    console.log(newTag)
    
    return (
        <div className='tag-container'>
            <h4>Recipes</h4>
            <div className='tags-list'>
                {
                    newTag.map((tag,index)=>{
                        const [text,value]=tag
                        const slug=slugify(text,{lower:true})
                        return(
                            <Link to={`/tags/${slug}`} key={index}>{text}({value})</Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TagsList
