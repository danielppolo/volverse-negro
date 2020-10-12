import React from 'react'


function BlurText({ text }) {
  return (
    <svg className="menu__text" viewBox="0 0 110 20" preserveAspectRatio="xMinYMid meet">
      <defs>
        <filter id="goo-1">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="	1 0 0 0 0
                      0 1 0 0 0
                      1 0 1 0 0
                      0 0 0 15 -8"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
      <g>
        <text x="0" y="15" />
        <text x="0" y="15">{text}</text>
      </g>
    </svg>
  )
}


export default BlurText
