const path= require('path')
const { default: slugify } = require('slugify')




exports.createPages= async({graphql,actions})=>{
const {createPage}=actions
console.log(createPage)

const result=await graphql(`
query MyQuery {
    allContentfulReceipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
  

`)
result.data.allContentfulReceipe.nodes.forEach((recipe)=>{
    recipe.content.tags.forEach((tag)=>{
        const tagSlug=slugify(tag,{lower:true})
        createPage({
            path:`/tags/${tagSlug}`,
            component:path.resolve(`src/Template/Template.js`),
            context:{
                tag:tag,
            }
        })
    })
})

console.log('result is ..............',result)

}