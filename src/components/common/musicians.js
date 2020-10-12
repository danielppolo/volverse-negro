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
        'https://res.cloudinary.com/teatroojo/image/upload/v1602487036/volverse_negro/images/ceag-12_o5w4ox.jpg',
        'https://res.cloudinary.com/teatroojo/image/upload/v1602487036/volverse_negro/images/ceag-15_nidfan.jpg',
        'https://res.cloudinary.com/teatroojo/image/upload/v1602487036/volverse_negro/images/ceag-13_akirxj.jpg',
        'https://res.cloudinary.com/teatroojo/image/upload/v1602487036/volverse_negro/images/ceag-16_mmcrry.jpg',
        'https://res.cloudinary.com/teatroojo/image/upload/v1602487035/volverse_negro/images/ceag-14_jnc2q9.jpg',
        'https://res.cloudinary.com/teatroojo/image/upload/v1602487035/volverse_negro/images/ceag-10_vranyh.jpg',
        'https://res.cloudinary.com/teatroojo/image/upload/v1602487034/volverse_negro/images/ceag-3_maxlfa.jpg',
        'https://res.cloudinary.com/teatroojo/image/upload/v1602487035/volverse_negro/images/ceag-11_ra3vcj.jpg',
        'https://res.cloudinary.com/teatroojo/image/upload/v1602487035/volverse_negro/images/ceag-6_pfppal.jpg',
        'https://res.cloudinary.com/teatroojo/image/upload/v1602487034/volverse_negro/images/ceag-9_kxbpax.jpg',
        'https://res.cloudinary.com/teatroojo/image/upload/v1602487034/volverse_negro/images/ceag-8_tlohkz.jpg',
        'https://res.cloudinary.com/teatroojo/image/upload/v1602487034/volverse_negro/images/ceag-4_i421iu.jpg',
        'https://res.cloudinary.com/teatroojo/image/upload/v1602487034/volverse_negro/images/ceag-7_kfrtl9.jpg',
        'https://res.cloudinary.com/teatroojo/image/upload/v1602487034/volverse_negro/images/ceag-5_wfkuqs.jpg',
        'https://res.cloudinary.com/teatroojo/image/upload/v1602487034/volverse_negro/images/ceag-2_r172qd.jpg',
        'https://res.cloudinary.com/teatroojo/image/upload/v1602487034/volverse_negro/images/ceag-1_s8zlea.jpg',
      ]}
    />
  )
}


export default Musicians
