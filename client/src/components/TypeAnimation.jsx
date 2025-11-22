import React from 'react'
import { TypeAnimation } from 'react-type-animation'; 

const Typeanimation = () => {
  return (
    <div>
       <TypeAnimation
        sequence={[
          'Track your YouTube growth',
          1000,
          'Analyze subscribers and views',
          1000,
          'Discover audience insights with AI',
          1000,
          'Optimize monetization strategies',
          1000
        ]}
        wrapper="span"
        speed={50}
        className="text-2xl inline-block"
        repeat={Infinity}
      />
    </div>
  )
}

export default Typeanimation

     