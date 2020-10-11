import React from 'react'
import styled from 'styled-components'

const FragmentStyled = styled.div`
  font-style: ${({ focus }) => focus && 'italic'};
  font-size: 24px;
`

function Fragment({ children, ...otherProps }) {
  return (
    <FragmentStyled {...otherProps}>
      {
         children
       }
    </FragmentStyled>
  )
}


export default Fragment
