import React, { Component } from 'react'
import style from './ActivityItem.module.scss'

class ActivityItem extends Component {
  render () {
    const { data } = this.props
    return (
      <div className={style.wrapper}>
        <div className={style.imgBox}>
          <img src={data.coverImg} alt=""/>
        </div>
        <div className={style.contentBox}>
          <div className={style.title}>{data.name}</div>
          <div className={style.time}>{data.describe}</div>
        </div>
      </div>
    )
  }
}

export default ActivityItem
