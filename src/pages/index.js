import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import useFigures from "../hooks/use-figures"

const IndexPage = () => {
  const figureList = useFigures()
  console.log(figureList)
  return (
    <Layout>
      <SEO title="Volverse negro" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
        {
          figureList.map(f => f)
        }
      </div>
    </Layout>
  )
}

export default IndexPage
