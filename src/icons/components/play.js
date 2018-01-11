import React from 'react'
import Icon from './icon'
import PropTypes from 'prop-types'

function Play(props) {
  return (
    <Icon {...props}>
      <path d="M6 4l20 12-20 12z"></path>
    </Icon>
  )
}

Play.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
}

export default Play
