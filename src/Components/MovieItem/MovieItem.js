import React, { Component } from 'react'
import style from './MovieItem.module.scss'
class MovieItem extends Component {
  render () {
    const { handleMovieItemClick } = this.props
    return (
      <div className={style.wrapper}>
        <div className={style.rightBox} onClick={handleMovieItemClick}>
          <img className={style.img} src="http://ww3.sinaimg.cn/large/006tNc79ly1g63v0ulkqgj30xc0psabq.jpg" alt=""/>
          <div className={style.detailBox}>
            <div className={style.title}>蜘蛛侠：英雄远征</div>
            <div className={style.msg}>
              <span>4.4w人想看</span>
              <span>3D iMax</span>
            </div>
            <div className={style.actor}>
              主演：汤姆赫兰德 赞达亚科菲亚
            </div>
            <div className={style.movieType}>
              类型：动作|冒险|科幻|奇幻
            </div>
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default MovieItem
