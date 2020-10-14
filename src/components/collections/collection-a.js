import React from 'react'
import Collection from '../common/collection'

function CollectionA({ props }) {
  return (
    <Collection
      noParallax
      style={{
        width: '60vw',
        height: '40vw',
      }}
      src={[
        'https://volverse-negro.s3.us-east-2.amazonaws.com/images/1.+refiner%C3%ADa58.jpg',
      ]}
      alt="Refinería"
    />
  )
}


export default CollectionA
