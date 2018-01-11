import React from 'react'
import Icon from './icon'
import PropTypes from 'prop-types'

function Pause(props) {
  return (
    <Icon {...props}>
      <path d="M4 4h10v24h-10zM18 4h10v24h-10z"></path>
    </Icon>
  )
}

Pause.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
}

export default Pause
