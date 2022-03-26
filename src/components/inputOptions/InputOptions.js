import React from 'react'
// styles
import './InputOptions.css'

function InputOptions({ title, Icon, color}) {
  return (
    <div className='inputOptions'>
        <Icon style={{  color }}/>
        <h4>{title}</h4>
    </div>
  )
}

export default InputOptions