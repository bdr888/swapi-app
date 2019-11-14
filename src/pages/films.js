import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Films from "../components/Films"

const FilmsPage = () => (
  <Layout>
    <SEO title="Films" />
    <Films />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FilmsPage
