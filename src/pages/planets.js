import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Planets from "../components/Planets"

const PlanetsPage = () => (
  <Layout>
    <SEO title="Planets" />
    <Planets />
  </Layout>
)

export default PlanetsPage
