import React, { Component } from 'react'
import './media.css'

class Media extends Component {
  render() {
    const styles = {
      container: {
        color: '#44546b',
        backgroundColor: 'white',
        border: '1px solid red',
        cursor: 'pointer',
        width: 260
      }
    }

    return (
      <div className="Media">
        <div className="Media-cover">
          <img className="Media-image" src="./images/covers/bitcoin.jpg" alt="" width={260} height={160} />
          <h3 className="Media-title">¿Por que aprender React.js?</h3>
          <p className="Media-author">Simon Gonzalez</p>
        </div>
      </div>
    )
  }
}

export default Media
