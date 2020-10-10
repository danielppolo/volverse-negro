import React from 'react'
import styled from 'styled-components'

const CollectionStyled = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
`
function Collection({ children }) {
  return (
    <CollectionStyled>
      {children}
    </CollectionStyled>
  )
}


export default Collection
