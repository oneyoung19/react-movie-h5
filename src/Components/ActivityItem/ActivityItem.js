import React, { Component } from 'react'
import style from './ActivityItem.module.scss'

class ActivityItem extends Component {
  render () {
    return (
      <div className={style.wrapper}>
        <div className={style.imgBox}>
          <img src="https://tva1.sinaimg.cn/large/006y8mN6ly1g6ovd59ywoj319y0sa427.jpg" alt=""/>
        </div>
        <div className={style.contentBox}>
          <div className={style.title}>蜘蛛侠：英雄远征IMAX体验活动</div>
          <div className={style.time}>2019年4月1日</div>
        </div>
      </div>
    )
  }
}

export default ActivityItem
