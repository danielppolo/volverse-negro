import React from 'react'
import styled from 'styled-components'
import useTime from '../../hooks/use-time'

const DateStyled = styled.div`
  font-size: 5rem;
  font-family: Inter, sans-serif;
`

function DateTitle({ props }) {
  const {
    year, month, day, hour, minute, second,
  } = useTime()
  return (
    <DateStyled>
      <h1>
        {year}
        /
        {month}
        /
        {day}
      </h1>
      <h1>
        {hour}
        .
        {minute}
        .
        {second}
      </h1>
    </DateStyled>
  )
}


export default DateTitle
