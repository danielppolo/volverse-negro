import React from 'react'
import styled from 'styled-components'
import Image from './image'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  margin: 10vh 0;
  width: 100vw;
  > div {
    max-width: 70vw; 
  }
`

const CollectionStyled = styled.div`
  height: 80vh;
  overflow-y: hidden;
   &::-webkit-scrollbar {
      display: none;
    }
 .collection-container {
    margin: 15vh 0;
    width: 50vh; // Height
    height: 100vw; // Width
    overflow-y: scroll;
    overflow-x: visible;
    transform: rotate(-90deg);
    transform-origin: right top;
    transform:rotate(-90deg) translateY(-50vh);
    &::-webkit-scrollbar {
      display: none;
    }
    > img, > div {
      transform: rotate(90deg) translateY(-50%) translateX(-50%);
      transform-origin: left bottom;
      margin-bottom: 240px;
      /* max-height: 300px; */
    }
 }
`
function Collection({ src, alt }) {
  if (src.length === 1) {
    return (
      <Container>
        <Image
          height="80%"
          width="50vw"
          overflow
          src={src[0]}
          alt={alt}
        />
      </Container>
    )
  }

  return (
    <CollectionStyled size={src.length}>
      <div className="collection-container" data-cursor="scroll">
        {
        src && src.map((e) => {
          const offset = Math.floor(Math.random() * 60) + 20
          return (
            <Image
              // width={800} // {Picture width}
              // offsetX={[-20, 20]}
              // offsetY={[offset * -1, offset]}
              src={e}
              alt={alt}
              key={src}
            />
          )
        })
      }
      </div>
    </CollectionStyled>
  )
}


export default Collection
