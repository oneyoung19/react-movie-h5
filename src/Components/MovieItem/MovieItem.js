import React, { Component } from 'react'
import style from './MovieItem.module.scss'
class MovieItem extends Component {
  render () {
    const { list, handleMovieItemClick } = this.props
    if (!list) {
      return null
    }
    return (
      <div className={style.wrapper}>
        <div className={style.rightBox} onClick={handleMovieItemClick}>
          <img className={style.img} src={list.poster} alt=""/>
          <div className={style.detailBox}>
            <div className={style.title}>{list.name}</div>
            <div className={style.msg}>
              <span>{Number(list.wantToSee) / 10}w人想看</span>
              <span>{list.dimensionalList.join(' ')}</span>
            </div>
            <div className={style.movieType}>
              导演：{list.director_str}
            </div>
            <div className={style.actor}>
              主演：{list.actor_str}
            </div>
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default MovieItem
