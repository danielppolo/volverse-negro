import React from 'react'
import styled from 'styled-components'

const FragmentStyled = styled.div`
  font-style: ${({ focus }) => focus && 'italic'};
  position: relative;
  .pos {
    transform: translate(-100%, 0);
    position: absolute;
    left: -20px;
    top: 0;
    font-size: 0.7rem;
    font-style: italic;
  }
  img {
    width: 200px;
  }
`

function Fragment({ children, pos, ...otherProps }) {
  return (
    <FragmentStyled {...otherProps}>
      {
         children
       }
      <span className="pos">{pos}</span>
    </FragmentStyled>
  )
}


export default Fragment
