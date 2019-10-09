import React, { PureComponent } from 'react'
import style from './CriticItem.module.scss'

class CriticItem extends PureComponent {
  render () {
    return (
      <div className={style.wrapper}>
        <div className={style.header}>
          {/* 头像 */}
          <div className={style.person}>
            <div className={style.avatar}></div>
            <div className={style.msg}>
              <div className={style.name}>银商全发自</div>
              <div className={style.action}>发布电影评论</div>
            </div>
          </div>
          {/* 评分 */}
          <div className={style.grade}>
            <div className={style.more}>...</div>
            <div className={style.score}>10.0</div>
          </div>
        </div>
        {/* 评论内容 */}
        <div className={`${style.content} ${style.mutiEllipsis}`}>
        很多时候虽然我们了解了TypeScript相关的基础知识，但是这不足以保证我们在实际项目中可以灵活运用，比如现在绝大部分前端开发者的项目都是依赖于框架的，因此我们需要来讲一下React与TypeScript应该如何结合运用。
        </div>
        {/* 时间 赞与转发 */}
        <div className={style.footer}>
          <div className={style.time}>2019-06-23</div>
          <div className={style.socialAction}>
            <i className={`iconfont icondianzan_active-copy-copy`}></i>54
            <i className={`iconfont iconforward`}></i>48
          </div>
        </div>
      </div>
    )
  }
}

export default CriticItem
