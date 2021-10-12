import React from 'react'
import { Link,graphql } from 'gatsby'
import Layout from '../components/Layout'
import setUpTag from '../utilis/SetUpTag'

function Tags({data}) {
  
  const newTags = setUpTag(data.allContentfulReceipe.nodes)
  console.log(newTags)
  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            

            return (
              <Link to={`/${text}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulReceipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
