import React, { Component } from 'react'
import styles from './MovieItemBtn.module.scss'

class MovieItemBtn extends Component {
  render () {
    const {className, text} = this.props
    return (
      <div className={`${className} ${styles.btn}`}>
        {text}
      </div>
    )
  }
}

export default MovieItemBtn
