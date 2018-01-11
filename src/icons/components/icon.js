import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  const { color, size } = props
  return (
    <svg
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 32 32"
    >
      <title>play3</title>
      {props.children}
    </svg>
  )
}

Icon.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
}

export default Icon
