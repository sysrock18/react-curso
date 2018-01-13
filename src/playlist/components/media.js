import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './media.css'

class Media extends Component {
  state = {
    author: this.props.author
  }

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
      <div className="Media" onClick={this.props.handleClick}>
        <div className="Media-cover">
          <img className="Media-image" src={this.props.cover} alt="" width={260} height={160} />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.state.author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio'])
}

export default Media
