import React, { useEffect } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Poster = () => {
  useEffect(() => {
    window.location.href = 'https://youtu.be/0iit6c3h-Qs'
  }, [])
  return (
    <Layout>
      <SEO title="Volverse negro" />
    </Layout>
  )
}

export default Poster
