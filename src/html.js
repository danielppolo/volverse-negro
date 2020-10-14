import React from 'react'
import PropTypes from 'prop-types'

export default function HTML({
  htmlAttributes, headComponents, bodyAttributes, preBodyComponents, body, postBodyComponents,
}) {
  return (
    <html {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital@0;1&family=Inter:wght@300&display=swap" rel="stylesheet" />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
        `
        window.onbeforeunload = function () {
          window.scrollTo(0, 0);
        }
        `,
          }}
        />
        {postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
