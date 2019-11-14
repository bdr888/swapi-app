import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Planets from '../components/Planets'

const PlanetsPage = () => (
  <Layout>
    <SEO title="Planets" />
    <Planets />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PlanetsPage
