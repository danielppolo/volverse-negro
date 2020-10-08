import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Figure = ({ src }) =>{
  
  return (
    (
      <div
        style={{
          background: `rebeccapurple`,
          marginBottom: `1.45rem`,
        }}
      >
       <img src={src} />
      </div>
    )
  )
}

Figure.propTypes = {
  siteTitle: PropTypes.string,
}

Figure.defaultProps = {
  siteTitle: ``,
}

export default Figure
