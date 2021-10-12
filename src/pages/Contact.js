import React from 'react'
import { Link ,graphql} from 'gatsby'
import Layout from '../components/Layout'
import AllRecipesList from '../components/AllRecipesList'

function Contact({data}) {
  const recipes= data.allContentfulReceipe.nodes
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum! Provident similique accusantium nemo autem</p>
            <p>obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
              nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat
            </p>
            <p>
              Reprehenderit,
              quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
              sapiente officiis modi at sunt excepturi expedita sint
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="Name">Your Name</label>
                <input type='text' name="name" id="name" />

              </div>
              <div className="form-row">
                <label htmlFor="Email">Your Email</label>
                <input type='text' name="email" id="email" />

              </div>
              <div className="form-row">
                <label htmlFor="Message">Message</label>
                <textarea name="message" id='message' ></textarea>

              </div>
              <button type="submit" className="btn block">Submit</button>
            </form>
          </article>
        </section>
        <section className='featured-recipes'>
    <h5>Look at this awesomesouce</h5>
    <AllRecipesList  recipes={recipes}/>
    </section>
      </main>
    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulReceipe(
      sort: {fields: title, order: ASC}
      filter: {features: {eq: true}}
    ) {
      nodes {
        title
        prepTime
        serving
        cookTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      totalCount
    }
  }
`


export default Contact
