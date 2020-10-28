import React from 'react'
import Collection from '../common/collection'

function CollectionAZ({ props }) {
  return (
    <Collection
      style={{
        width: '60vw',
        height: '40vw',
      }}
      src={[
        'https://volverse-negro-daniel.s3.amazonaws.com/images/25+Nueva.jpg',
        'https://volverse-negro-daniel.s3.amazonaws.com/images/25+Nueva1.jpg',
      ]}
      alt="Nino de cera y flauta"
    />
  )
}


export default CollectionAZ
