/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        description
        title
      }
    }
  }
`

function Seo({ description, lang, meta, title }) {
  const { site } = useStaticQuery(query)
  const metaDescription=description ||site.siteMetadata.description
    // graphql`
    // query seoQuery {
    //   site {
    //     siteMetadata {
    //       author
    //       description
    //       title
    //     }
    //   }
    // }
    // `
  

 

  return (
    <Helmet
    htmlAttributes={{lang:'en'}}
      title={`${title} | ${site.siteMetadata.title}`}
       meta={
         [
           {name:'description',
           content:metaDescription,
          } 
      ]}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
