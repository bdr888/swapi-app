import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Films from "../components/Films"

const FilmsPage = () => (
  <Layout>
    <SEO title="Films" />
    <Films />
  </Layout>
)

export default FilmsPage
