import * as React from 'react'

const FilledSpaces = props => (
    <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' {...props}>
        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
            <rect
                stroke='#36A18B'
                strokeWidth='1.5'
                fill='#36A18B'
                x='2'
                y='14'
                width='9'
                height='9'
                rx='2'
            />
            <rect
                stroke='#36A18B'
                strokeWidth='1.5'
                fill='#36A18B'
                x='14'
                y='2'
                width='9'
                height='9'
                rx='2'
            />
            <rect
                stroke='#36A18B'
                strokeWidth='1.5'
                fill='#36A18B'
                x='14'
                y='14'
                width='9'
                height='9'
                rx='2'
            />
            <rect
                stroke='#36A18B'
                strokeWidth='1.5'
                fill='#36A18B'
                x='2'
                y='2'
                width='9'
                height='9'
                rx='2'
            />
        </g>
    </svg>
)

export default FilledSpaces
