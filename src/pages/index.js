import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm so glad you decided to start working on websites.</p>
      <StaticImage
        alt="Bijan at work writing poetry"
        src="../images/artist-bijan.jpeg"
      />
    </Layout>
  )
}

export const Head = () => <title>Bijan John Home Page</title>

export default IndexPage