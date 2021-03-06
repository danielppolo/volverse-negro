import React from 'react'
import styled from 'styled-components'

const FragmentStyled = styled.div`
  font-style: ${({ focus }) => focus && 'italic'};
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding-right: 4rem;
  margin-bottom: 1rem;
  .pos {
    transform: translate(-100%, 0);
    position: absolute;
    left: -0.6rem;
    top: 0;
    font-size: 0.8rem;
    font-style: italic;
    
  }
  img {
    max-width: 100%;
  }
    
  @media (max-width: 720px) {
    padding-right: 0;
  }
`

function Fragment({
  children, pos, active, ...otherProps
}) {
  return (
    <FragmentStyled
      {...otherProps}
      data-active={active}
      data-cursor="escuchar"
      data-cursor-alt="pausar"
    >
      {
         children
       }
      <span className="pos">{pos}</span>
    </FragmentStyled>
  )
}


export default Fragment
