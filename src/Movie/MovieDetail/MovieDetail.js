import React, { PureComponent } from 'react'
import style from './MovieDetail.module.scss'
import CriticItem from '../../Components/CriticItem/CriticItem'

class MovieDetail extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      list: [1,2]
    }
  }
  render () {
    return (
      <div className={style.wrapper}>
        {/* 影片信息 */}
        <div className={style.infoBox}>
          <div className={`${style.title} ${style.ellipsis}`}>蜘蛛侠：英雄远征</div>
          <div className={style.info}>
            <div className={style.left}>
              <img src="" alt=""/>
            </div>
            <div className={style.right}>
              <div className={style.content}>
                <div className={style.score}>9.4分</div>
                <div className={style.item}>2019年06月21日上映</div>
                <div className={style.item}>动画|剧情|奇幻</div>
                <div className={style.item}>日本|125分钟</div>
              </div>
              <div className={style.evaluate}>
                <div className={style.seen}>
                  <div className={style.icon}></div>
                  <div className={style.describe}>看过</div>
                </div>
                <div className={style.toSee}>
                  <div className={style.icon}></div>
                  <div className={style.describe}>想看</div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${style.introduce} ${style.mutiEllipsis}`}>
          文字在发展早期都是图画形式的，有些是以形表意，有些是以形表音，其中有表意文字（象形文字，即以形表意的文字），与语音无甚关系，中国文字便是从此渐次演变而成。有些中文字可以从表面、部首、字旁看到一些联系旁通的字义。而这些特色是拼音文字所没有的。所以古代中国文字在不同的语系区域是拥有不同发音的，即方言的存在。
          </div>
          <div className={style.operator}>
            <i className={`iconfont iconarrow_right ${style.iconarrow_right}`}></i>
          </div>
        </div>
        {/* 演职人员 */}
        <div className={style.actorBox}>
          <div className={style.title}>
            演职人员
          </div>
          <div className={style.director}>
            <div className={style.label}>导演</div>
            <div className={style.name}>桥我自</div>
          </div>
          <div className={style.actor}>
            <div className={style.label}>演员</div>
            <div className={style.nameList}>
              <div className={style.name}>汤姆荷兰弟杰斯</div>
              <div className={style.name}>赞达亚</div>
            </div>
          </div>
        </div>
        {/* 剧照 */}
        <div className={style.still}>
          <div className={style.title}>
            剧照
          </div>
          <div className={style.stillList}>
            
          </div>
        </div>
        {/* 影评 */}
        <div className={style.filmCritics}>
          <div className={style.title}>
            <div className={style.right}>影评</div>
            <div className={style.left}>写评论</div>
          </div>
          {
            this.state.list.map(item => (<CriticItem key={item}></CriticItem>))
          }
        </div>
      </div>
    )
  }
}

export default MovieDetail
