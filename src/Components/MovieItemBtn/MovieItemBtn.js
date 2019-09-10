import React, { Component } from 'react'
import styles from './MovieItemBtn.module.scss'

class MovieItemBtn extends Component {
  render () {
    const {style, text} = this.props
    return (
      <div className={styles.btn} style={style}>
        {text}
      </div>
    )
  }
}

export default MovieItemBtn
