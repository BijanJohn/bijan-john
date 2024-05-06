import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/layout"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog Posts">
        <ul>
        {
            data.allFile.nodes.map(node => (
                <li key={node.name}>
                    {node.name}
                </li>
            ))
        }
        </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export const Head = () => <Seo title="Blog Posts" />

export default BlogPage