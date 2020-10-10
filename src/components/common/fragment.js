import React from 'react'
import styled from 'styled-components'

const FragmentStyled = styled.div`
`

function Fragment({ children }) {
  return (
    <FragmentStyled>
      {
         children
       }
    </FragmentStyled>
  )
}


export default Fragment
