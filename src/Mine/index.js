import React, { PureComponent } from 'react'
import style from './mine.module.scss'

class Mine extends PureComponent {
  render () {
    return (
      <div className={style.wrapper}>
        {/* 头像 */}
        <div className={style.infoBox}>
          <div className={style.headShot}>
          </div>
          <div className={style.info}>
            <div className={style.nickName}>屌丝男士大鹏</div>
            <div className={style.phone}>130****7634</div>
          </div>
        </div>
        {/* 会员卡 */}
        <div className={style.memberCard}>
          <div className={style.rightBox}>
            <div className={style.icon}></div>
            <div className={style.cardName}>线下会员卡</div>
          </div>
          <div className={style.btn}>绑定</div>
        </div>
        {/* 我的订单 */}
        <div className={style.orderBox}>
          <div className={style.title}>我的订单</div>
          <div className={style.myOrder}>
            <div className={style.orderItem}>
              <div className={style.iconBox}>
                <img src="" alt=""/>
              </div>
              <div className={style.iconName}>待取票</div>
            </div>
            <div className={style.orderItem}>
              <div className={style.iconBox}>
                <img src="" alt=""/>
              </div>
              <div className={style.iconName}>待取卖品</div>
            </div>
            <div className={style.orderItem}>
              <div className={style.iconBox}>
                <img src="" alt=""/>
              </div>
              <div className={style.iconName}>待处理</div>
            </div>
            <div className={style.orderItem}>
              <div className={style.iconBox}>
                <img src="" alt=""/>
              </div>
              <div className={style.iconName}>已结束</div>
            </div>
          </div>
        </div>
        {/* 我的数据 */}
        <div className={style.dataBox}>
          <div className={style.dataItem}>
            <div className={style.dataName}>我的礼品卡</div>
            <div className={style.icon}></div>
          </div>
          <div className={style.dataItem}>
            <div className={style.dataName}>我的刷脸卡</div>
            <div className={style.icon}></div>
          </div>
          <div className={style.dataItem}>
            <div className={style.dataName}>我的电影</div>
            <div className={style.icon}></div>
          </div>
          <div className={style.dataItem}>
            <div className={style.dataName}>我的奖品</div>
            <div className={style.icon}></div>
          </div>
          <div className={style.dataItem}>
            <div className={style.dataName}>我的优惠</div>
            <div className={style.icon}></div>
          </div>
          <div className={style.dataItem}>
            <div className={style.dataName}>意见反馈</div>
            <div className={style.icon}></div>
          </div>
          <div className={style.dataItem}>
            <div className={style.dataName}>拨打客服</div>
            <div className={style.icon}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Mine
