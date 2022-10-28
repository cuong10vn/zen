import * as React from 'react'

const FilledTiles = props => (
    <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' {...props}>
        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
            <g transform='translate(0.000000, 1.000000)' fill='#36A18B'>
                <path d='M2.00008893,7.17067428 L2,18 C2,19.6568542 3.34314575,21 5,21 L5,21 L15.8293257,20.9999111 C15.4175144,22.1651499 14.3062521,23 13,23 L3,23 C1.34314575,23 2.02906125e-16,21.6568542 0,20 L0,10 C-1.5996974e-16,8.69374794 0.834850101,7.58248558 2.00008893,7.17067428 Z' />
                <path d='M6.00008893,3.17067428 L6,14 C6,15.6568542 7.34314575,17 9,17 L9,17 L19.8293257,16.9999111 C19.4175144,18.1651499 18.3062521,19 17,19 L7,19 C5.34314575,19 4,17.6568542 4,16 L4,6 C4,4.69374794 4.8348501,3.58248558 6.00008893,3.17067428 Z' />
                <rect
                    stroke='#36A18B'
                    strokeWidth='1.5'
                    x='9'
                    y='0'
                    width='14'
                    height='14'
                    rx='2'
                />
            </g>
        </g>
    </svg>
)

export default FilledTiles