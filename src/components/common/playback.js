import React from 'react'
import styled from 'styled-components'

const PlaybackStyled = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  fill: var(--color-text);
`

function Playback({ active, onClick }) {
  return (
    <PlaybackStyled onClick={onClick}>
      {
        active ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 40" x="0px" y="0px">
            <g data-name="Layer 33"><path d="M5,2h9V30H5ZM18,2V30h9V2Z" /></g>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125" x="0px" y="0px">
            <polygon points="82.54 50 50 68.79 17.46 87.58 17.46 50 17.46 12.42 50 31.21 82.54 50" />
          </svg>
        )
      }
    </PlaybackStyled>

  )
}


export default Playback
