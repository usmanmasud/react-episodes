import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './styles.css'

export default function Page ({noOfStars= 5}) {
    const [rating, setRating] = useState(0);
    const [hover, SetHover] = useState(0);

    function handleClick(getCurrentIndex) {
      setRating(getCurrentIndex)
      console.log(getCurrentIndex)
    }
    function handleMouseEnter(getCurrentIndex) {
      SetHover(getCurrentIndex)
      console.log(getCurrentIndex)
    }
    function handleMouseLeave() {
      SetHover(rating)
    }

  return (
    <div className='star-rating'>
      {
        [...Array(noOfStars)].map((_,index) => {
          index += 1
          return <FaStar 
            key={index}
            className={index <= (hover || rating) ? 'active' : 'inactive'}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        })
      }
      <h2>RATING: {rating}</h2>
    </div>

  )
}
