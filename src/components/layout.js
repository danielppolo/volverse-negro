import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <>
      <div>
        <main>{children}</main>
        <footer style={{
          marginTop: '2rem',
        }}
        >
          © Una pieza de
          {' '}
          {data.site.siteMetadata?.author}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
