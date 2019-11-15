import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LoadingSpinner from "../components/LoadingSpinner"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Star Wars API playground</h2>
    <div>
      <Link to="/films/">See all the Star Wars Films</Link>
    </div>
    <div>
      <Link to="/planets/">See all planets in the Star Wars galaxy</Link>
    </div>
  </Layout>
)

export default IndexPage
