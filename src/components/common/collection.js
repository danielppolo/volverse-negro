import React from 'react'
import styled from 'styled-components'
import Image from './image'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  margin: 20vh 0;
  width: 100vw;
  @media (max-width: 720px) {
    height: auto;
  }
  > div {
    max-width: 70vw; 
  }
`

const CollectionStyled = styled.div`
  height: 80vh;
  display: flex;
  margin: 10vh 0;
  align-items: center;
  justify-content: center;
  /* margin: 10vh 0; */
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 720px) {
    height: 50vh;
  }
 .collection-container {
    width: ${({ size }) => size}px; // Height
    height: 100vw; // Width
    overflow-y: scroll;
    overflow-x: visible;
    transform-origin: center center;
    transform:rotate(-90deg);
    &::-webkit-scrollbar {
      display: none;
    }
    > img, > div {
      transform: rotate(90deg) translateX(-50%);
      transform-origin: left bottom;
      margin-bottom: ${({ size, vertical }) => (size / (vertical ? 8 : 1.5))}px;
      /* max-height: 300px; */
    }
 }
`
function Collection({ src, alt, vertical }) {
  if (src.length === 1) {
    return (
      <Container>
        <Image
          height="100%"
          width="80vw"
          overflow
          src={src[0]}
          alt={alt}
        />
      </Container>
    )
  }
  if (vertical) {
    return (
      <CollectionStyled
        size={500}
        vertical
      >
        <div
          className="collection-container"
          data-cursor="desplazar"
        >
          {
          src && src.map(e => (
            <img
              height={500}
              src={e}
              alt={alt}
              key={e}
            />
          ))
        }
        </div>
      </CollectionStyled>
    )
  }

  return (
    <CollectionStyled
      size={400}
    >
      <div
        className="collection-container"
        data-cursor="desplazar"
      >
        {
        src && src.map((e) => {
          const offset = Math.floor(Math.random() * 20)
          const width = Math.floor(Math.random() * 400) + 200
          return (
            <img
              height={400}
              // style={{
              //   marginBottom: width + 30,
              // }}
              // offsetX={[-20, 20]}
              // y={[offset * -1, offset]}
              src={e}
              alt={alt}
              key={e}
            />
          )
        })
      }
      </div>
    </CollectionStyled>
  )
}


export default Collection
