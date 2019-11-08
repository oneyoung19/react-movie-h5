import React, { Component } from 'react'
import style from './confirmGoodsItem.module.scss'
import { kabaoPng } from '../../assets/base64/kabao'
import minusPng from '../../assets/images/minus.png'
import plusPng from '../../assets/images/plus.png'

class ConfirmGoodsItem extends Component {
  render () {
    return (
      <div className={style.wrapper}>
        {/* 卖品照片 */}
        <div className={style.img}>
          <img src={kabaoPng} alt=""/>
        </div>
        {/* 卖品信息 */}
        <div className={style.content}>
          <div className={style.title}>单人观影套餐</div>
          <div className={style.describe}>1中爆+1饮料</div>
          <div className={style.time}>截止兑回时间：2019.12.30</div>
          <div className={style.price}>
            <div className={style.ordinary}>￥49.9</div>
            <div className={style.member}>会员价28元</div>
          </div>
          {/* 按钮 */}
          <div className={style.btn}>
            <div className={style.minus}>
              <img src={minusPng} alt=""/>
            </div>
            <div className={style.text}>21</div>
            <div className={style.plus}>
              <img src={plusPng} alt=""/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ConfirmGoodsItem
