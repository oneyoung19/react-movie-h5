import React, { Component } from 'react'
import style from './MovieItem.module.scss'

class MovieItem extends Component {
  render () {
    const { list, handleMovieItemClick } = this.props
    if (!list) {
      return null
    }
    const { poster, name, wantToSee, dimensionalList, director_str, actor_str } = list
    let Dom_wantToSee, Dom_dimensionalList = null
    if (wantToSee) {
      Dom_wantToSee = <span className={style.wantToSee}>{Number(wantToSee) / 10}w人想看</span>
    }
    if (dimensionalList && dimensionalList.length) {
      Dom_dimensionalList = <span className={style.dimensionalList}>{dimensionalList.join(' ')}</span>
    }
    return (
      <div className={style.wrapper}>
        <div className={style.rightBox} onClick={handleMovieItemClick}>
          <img className={style.img} src={poster} alt=""/>
          <div className={style.detailBox}>
            <div className={style.title}>{name}</div>
            <div className={style.msg}>
              { Dom_wantToSee }
              { Dom_dimensionalList }
              {/* <span>{Number(wantToSee) / 10}w人想看</span> */}
              {/* <span>{dimensionalList.join(' ')}</span> */}
            </div>
            <div className={style.movieType}>
              导演：{director_str}
            </div>
            <div className={style.actor}>
              主演：{actor_str}
            </div>
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default MovieItem
