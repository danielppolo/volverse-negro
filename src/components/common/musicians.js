import React from 'react'
import styled from 'styled-components'
import Collection from './collection'

const Container = styled.div`
`
function Musicians({ props }) {
  return (
    <Collection
      alt="Músico"
      src={[
        'https://volverse-negro.s3.us-east-2.amazonaws.com/images/ceag-1.jpg',
        'https://volverse-negro.s3.us-east-2.amazonaws.com/images/ceag-2.jpg',
        'https://volverse-negro.s3.us-east-2.amazonaws.com/images/ceag-3.jpg',
        'https://volverse-negro.s3.us-east-2.amazonaws.com/images/ceag-4.jpg',
        'https://volverse-negro.s3.us-east-2.amazonaws.com/images/ceag-5.jpg',
        'https://volverse-negro.s3.us-east-2.amazonaws.com/images/ceag-6.jpg',
        'https://volverse-negro.s3.us-east-2.amazonaws.com/images/ceag-7.jpg',
        'https://volverse-negro.s3.us-east-2.amazonaws.com/images/ceag-8.jpg',
        'https://volverse-negro.s3.us-east-2.amazonaws.com/images/ceag-9.jpg',
        'https://volverse-negro.s3.us-east-2.amazonaws.com/images/ceag-10.jpg',
        'https://volverse-negro.s3.us-east-2.amazonaws.com/images/ceag-11.jpg',
        'https://volverse-negro.s3.us-east-2.amazonaws.com/images/ceag-12.jpg',
        'https://volverse-negro.s3.us-east-2.amazonaws.com/images/ceag-13.jpg',
        'https://volverse-negro.s3.us-east-2.amazonaws.com/images/ceag-14.jpg',
        'https://volverse-negro.s3.us-east-2.amazonaws.com/images/ceag-15.jpg',
        'https://volverse-negro.s3.us-east-2.amazonaws.com/images/ceag-16.jpg',
      ]}
    />
  )
}


export default Musicians
