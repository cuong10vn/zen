import * as React from 'react'

const FilledList = props => (
    <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' {...props}>
        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
            <g
                transform='translate(3.000000, 1.000000)'
                fill='#36A18B'
                stroke='#36A18B'
                strokeWidth='1.5'
            >
                <rect x='0' y='15' width='18' height='7' rx='2' />
                <rect x='0' y='0' width='18' height='7' rx='2' />
            </g>
            <line
                x1='3'
                y1='12'
                x2='21'
                y2='12'
                stroke='#36A18B'
                strokeWidth='1.5'
                strokeLinecap='square'
            />
        </g>
    </svg>
)

export default FilledList
