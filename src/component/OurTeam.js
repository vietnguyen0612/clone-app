import React from 'react'
import './OurTeam.scss'


import member1 from "../image/team/member1.jpg"
import member2 from "../image/team/member2.jpg"
import member3 from "../image/team/member3.jpg"
export default function OurTeam() {
  return (
    <div className='our-team'>
        <h2>
            OUR TEAM
        </h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora esse, inventore incidunt consequatur magni animi autem veniam neque laudantium quod, nihil illo unde nemo odio sint, itaque quidem ea suscipit.
        </p>

        <div className='team'>
            <img src={member1} alt='team' />
            <img src={member2} alt='team' />
            <img src={member3} alt='team' />
        </div>
    </div>
  )
}
