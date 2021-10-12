import React from 'react'
import setUpTag from '../utilis/SetUpTag'
import {Link}from 'gatsby'

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
                        return(
                            <Link to={`/${text}`} key={index}>{text}({value})</Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TagsList
