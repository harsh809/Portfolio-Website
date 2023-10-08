import React from 'react'
import Banner from './Banner'
import Templates from './Templates'

export default function Maincomponent() {
  return (
    <div className='home_section'>
        <div className='banner_part'>
            <Banner/>
        </div>
        <div>
            <Templates/>
        </div>
    </div>
  )
}
