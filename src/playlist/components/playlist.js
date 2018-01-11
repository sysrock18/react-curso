import React from 'react'
import './playlist.css'
import Media from './media'
import PropTypes from 'prop-types'
import Play from '../../icons/components/play'
import Volume from '../../icons/components/volume'
import Pause from '../../icons/components/pause'
import FullScreen from '../../icons/components/full-screen'

function Playlist(props) {
  const { categories } = props.data
  return (
    <div>
      {
        categories.map(category =>
          <div key={category.id}>
            <h1>{category.title}</h1>
            <h3>{category.description}</h3>
            <div className="Playlist">
              <div>
                <Play size={32} color="red" />
                <Pause size={32} color="blue" />
                <Volume size={32} color="black" />
                <FullScreen size={32} color="green" />
              </div>
              {
                category.playlist.map(item => 
                  <Media
                    key={item.id}
                    {...item} />)
              }
            </div>
          </div>
        )
      }
    </div>
  )
}

Playlist.propTypes = {
  data: PropTypes.object.isRequired
}

export default Playlist
