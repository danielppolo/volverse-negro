import styled from 'styled-components'
import React from 'react'
import { Parallax } from 'react-scroll-parallax'

const TitleStyled = styled.div`
  margin: 6rem 0;
  display: flex;
  justify-content: flex-end;
  span {
    font-size: 4rem;
    text-align: right;
    font-style: italic;
    &:hover {
      font-style: normal;
    }
  }
`


function Title({ children }) {
  return (
    <Parallax
      y={[30, 0]}
    >
      <TitleStyled>
        <span className="interact">{children}</span>
      </TitleStyled>
    </Parallax>
  )
}


export default Title
