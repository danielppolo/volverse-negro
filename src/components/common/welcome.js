import React from 'react'
import styled from 'styled-components'
import Date from './date'
import Location from './location'

const Container = styled.div`
  height: 90vh;
  margin-bottom: 10vh;
  width: 100%;
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

function Welcome() {
  return (
    <Container>
      <Date />
      <Location />
    </Container>
  )
}


export default Welcome
