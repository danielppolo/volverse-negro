import React from 'react'
import styled from 'styled-components'
import useTime from '../../hooks/use-time'

const DateStyled = styled.div`
  font-size: 6rem;
  font-family: Inter, sans-serif;
  @media (max-width: 720px) {
    font-size: 4rem;
  }
`

function DateTitle({ props }) {
  const {
    year, month, day, hour, minute, second,
  } = useTime()
  return (
    <DateStyled>
      <span>
        {year}
        /
        {month}
        /
        {day}
      </span>
      <br />
      <span>
        {hour}
        .
        {minute}
        .
        {second}
      </span>
    </DateStyled>
  )
}


export default DateTitle
