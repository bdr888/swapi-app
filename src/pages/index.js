import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>landing page</div>
    <Link to="/films/">Go to Films</Link>
    <Link to="/planets/">Go to planets</Link>
  </Layout>
)

export default IndexPage
