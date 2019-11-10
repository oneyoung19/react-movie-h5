import React, { Component } from 'react'
import styles from './MovieItemBtn.module.scss'
import { Toast } from 'antd-mobile'

class MovieItemBtn extends Component {
  render () {
    const {className, text} = this.props
    return (
      <div className={`${className} ${styles.btn}`} onClick={this.handleBtnClicked.bind(this)}>
        {text}
      </div>
    )
  }
  handleBtnClicked () {
    Toast.info('请测试购买商城中的卖品', 2)
  }
}

export default MovieItemBtn
