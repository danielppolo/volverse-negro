import React from 'react'


function Column({ width, children }) {
  return (
    <div style={{ flexBasis: `${width}%`, flexGrow: 1 }}>{children}</div>
  )
}


export default Column
