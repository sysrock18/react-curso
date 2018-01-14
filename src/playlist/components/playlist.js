import React from 'react'
import './playlist.css'
import Media from './media'
import PropTypes from 'prop-types'

function Playlist(props) {
  return (
    <div className="Playlist">
      {
        props.playlist.map(item => 
          <Media
            key={item.id}
            {...item}
            openModal={props.handleOpenModal}
          />
        )
      }
    </div>
  )
}

Playlist.propTypes = {
  
}

export default Playlist
