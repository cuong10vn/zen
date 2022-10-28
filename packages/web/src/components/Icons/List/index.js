import * as React from 'react'

const List = props => (
    <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' {...props}>
        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
            <rect
                stroke='currentcolor'
                strokeWidth='1.5'
                x='3'
                y='16'
                width='18'
                height='7'
                rx='2'
            />
            <rect
                stroke='currentcolor'
                strokeWidth='1.5'
                x='3'
                y='1'
                width='18'
                height='7'
                rx='2'
            />
            <line
                x1='3'
                y1='12'
                x2='21'
                y2='12'
                stroke='currentcolor'
                strokeWidth='1.5'
                strokeLinecap='square'
            />
        </g>
    </svg>
)

export default List
