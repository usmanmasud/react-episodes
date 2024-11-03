import React, { useState } from 'react'
import data from './data'

export default function Accordian () {

  const [selected, setSelected] = useState(null)
  function handleSingleSelection(getCurrentId) {
    console.log(getCurrentId)
    setSelected(getCurrentId)
  }

  return (
    <div className='container'>
        <div className='accordian'>
          {
            data && data.length > 0 ?
            data.map(dataItem => <div className='item'>
              <div className='title' onClick={() => handleSingleSelection(dataItem.id)}>
                <h3>{dataItem.question}</h3>
                <span>+</span>
                {
                  selected === dataItem.id ? <div className='answer'>
                    {dataItem.answer}
                  </div> : null
                 }
              </div>
            </div>)
             : <di>No data found</di>
          }
        </div>
    </div>
  )
}
