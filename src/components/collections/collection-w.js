import React from 'react'
import Collection from '../common/collection'

function CollectionW({ props }) {
  return (
    <Collection
      vertical
      alt="Pájaros del Centro de Artes de Guanajuato"
      src={[
        'https://volverse-negro-daniel.s3.amazonaws.com/images/22.+p%C3%A1jaros+Cearg43.jpg',
        'https://volverse-negro-daniel.s3.amazonaws.com/images/22.+p%C3%A1jaros+Cearg44.jpg',
        'https://volverse-negro-daniel.s3.amazonaws.com/images/22.+p%C3%A1jaros+Cearg49.jpg',
      ]}
    />
  )
}


export default CollectionW
