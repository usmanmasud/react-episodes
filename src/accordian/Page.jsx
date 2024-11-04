import React, { useState } from 'react'
import data from './data'
import './styles.css'

export default function Accordian () {

  const [selected, setSelected] = useState(null);
  const [EnmultiSelection, setEnMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  function handleSingleSelection(getCurrentId) {
    // console.log(getCurrentId)
    setSelected(getCurrentId === selected ? null : getCurrentId)
  }

  function handleMultiSelection(getCurrentId) {
     let cpyMultiplke = [...multiple]
      const findIndexofCurrentId = cpyMultiplke.indexOf(getCurrentId)

      console.log(findIndexofCurrentId)
      if (findIndexofCurrentId === -1) cpyMultiplke.push(getCurrentId)
        else cpyMultiplke.splice(findIndexofCurrentId, 1)
      setMultiple(cpyMultiplke)
      console.log(selected, multiple)
  }

  return (
    <div className='container'>
      <button onClick={() =>setEnMultiSelection(!EnmultiSelection)}>Enable Multi-Selection</button>
        <div className='accordian'>
          {
            data && data.length > 0 ?
            data.map(dataItem => <div className='item'>
              <div className='title' 
                onClick={
                  EnmultiSelection
                  ? () => handleMultiSelection(dataItem.id)                  
                  : () => handleSingleSelection(dataItem.id)}>


                <h3>{dataItem.question}</h3>
                <span>+</span>
                </div>
                {
                  EnmultiSelection 
                   ? multiple.indexOf(dataItem.id !== -1) && 
                  (<div className='answer'>{dataItem.answer}
                  </div>)
                  : selected === dataItem.id && (<div className='answer'>
                    {dataItem.answer}
                  </div>)
                }
                {/* {
                  selected === dataItem.id || multiple.indexOf(dataItem.id !== -1) ? <div className='answer'>
                    {dataItem.answer}
                  </div> : null
                 } */}
              
            </div>)
             : <di>No data found</di>
          }
        </div>
    </div>
  )
}
