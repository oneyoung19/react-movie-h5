import React, { Component } from 'react'
import style from './movie.module.scss'
import MovieItem from '../Components/MovieItem/MovieItem'
import MovieItemBtn from '../Components/MovieItemBtn/MovieItemBtn'
import { getHitFilms } from '../api/index'
class Movie extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      // 热映电影列表数组
      hotList: [0,1,2,3,4,5,6,7],
      // 即将上映列表
      futureList: [0],
      // 当前电影
      active: 'hotFilm'
    }
  }
  componentDidMount () {
    getHitFilms({
      name: 'yxp'
    }).then(res => {
      console.log(res)
    })
  }
  render () {
    const { active, hotList, futureList } = this.state
    return (
      <div className={style.container}>
        {/* 影城信息 */}
        <div className={style.location}>
          <div className={style.detail}>
            <div className={style.cinemaName}>旧宫世界之花自由人影城</div>
            <div className={style.locationName}>大兴区旧宫镇久敬庄路世界之花</div>
          </div>
          <div className={style.icon}>
            <i className={`iconfont icondituweizhi ${style.icondituweizhi}`}></i>
          </div>
        </div>
        {/* banner区域 */}
        <div className={style.banner}>
        </div>
        <div className={style.header}>
          <div className={ active === 'hotFilm' ? `${style.film} ${style.active}` : `${style.film}` } onClick={this.toggleToHotFilm}>正在热映</div>
          <div className={ active === 'futureFilm' ? `${style.film} ${style.active}` : `${style.film}`} onClick={this.toggleToFutureFilm}>即将上映</div>
        </div>
        <div className={style.currentTime}>2019年06月28日(周五)</div>
        <div className={style.movieArea}>
          <div className={active === 'hotFilm' ? `${style.movieList}` : `${style.movieList} ${style.hidden}`}>
            {
              hotList.map((item) => {
                return (
                  <MovieItem key={item} handleMovieItemClick={this.handleMovieItemClick}>
                    {/* style text */}
                    <MovieItemBtn style={{backgroundColor: '#1AA5FF', color: '#fff'}} text={'预售'}></MovieItemBtn>
                  </MovieItem>
                )
              })
            }
          </div>
          <div className={active === 'futureFilm' ? `${style.movieList}` : `${style.movieList} ${style.hidden}`}>
            {
              futureList.map((item) => {
                return (
                  <MovieItem key={item} handleMovieItemClick={this.handleMovieItemClick}>
                    {/* style text */}
                    <MovieItemBtn style={{backgroundColor: '#1AA5FF', color: '#fff'}} text={'预售'}></MovieItemBtn>
                  </MovieItem>
                )
              })
            }
          </div>
          </div>
      </div>
    )
  }
  toggleToHotFilm = () => {
    console.log(this.props)
    this.setState({
      active: 'hotFilm'
    })
  }
  toggleToFutureFilm = () => {
    this.setState({
      active: 'futureFilm'
    })
  }
  handleMovieItemClick = () => {
    this.props.history.push({
      pathname: '/movie/detail'
    })
  }
}

export default Movie
