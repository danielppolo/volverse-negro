import PropTypes from 'prop-types'
import React from 'react'
import Credits from './common/credits'

const Layout = ({ children }) => (
  <>
    <div>
      <main>{children}</main>
      <footer style={{
        marginTop: '2rem',
      }}
      >
        <Credits />
          .
      </footer>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
