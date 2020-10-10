import React from 'react'

function DateTitle({ props }) {
  const date = new Date()
  return (
    <div>
      <h1>
        {date.getFullYear()}
      /
        {`${date.getMonth()}`.padStart(2, '0')}
      /
        {`${date.getDay()}`.padStart(2, '0')}
      </h1>
      <h1>
        {`${date.getHours()}`.padStart(2, '0')}
        .
        {`${date.getMinutes()}`.padStart(2, '0')}
        .
        {`${date.getSeconds()}`.padStart(2, '0')}
      </h1>
    </div>
  )
}


export default DateTitle
