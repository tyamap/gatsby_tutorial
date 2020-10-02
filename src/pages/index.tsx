import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <h1>Welcome to {data.site.siteMetadata.title}!</h1>
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
