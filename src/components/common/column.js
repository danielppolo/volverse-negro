import React from 'react'


function Column({ width, grow, children }) {
  return (
    <div
      style={{
        flexBasis: `${width}%`,
        flexGrow: grow ? 1 : 0,
      }}
    >
      {children}
    </div>
  )
}


export default Column
