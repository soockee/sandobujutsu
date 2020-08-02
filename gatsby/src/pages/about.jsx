import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts'

export default ({ data }) => (
  <div>
    <h1>{data.site.siteMetadata.title} about</h1>
    <p>This is the about page.</p>
  </div>
)
export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`