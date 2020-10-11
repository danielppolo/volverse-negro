import React from 'react'
import styled from 'styled-components'

const CollectionStyled = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  img {
    margin-right: 50px;
  }
`
function Collection({ children }) {
  return (
    <CollectionStyled>
      {children}
    </CollectionStyled>
  )
}


export default Collection
