import React from 'react'
import PropTypes from 'prop-types'
const button = ({color,text, onClick}) => {
  return (
    <div>
      <button className='btn' 
      style={{backgroundColor: color}} 
      onClick = {onClick}
      >{text}</button>
    </div>
  )
}

button.defaultProps = {
    color:'green',
    text:'Add'
}
button.propTypes = {
    color:PropTypes.string,
    text:PropTypes.string,
    onClick:PropTypes.func
}


export default button
