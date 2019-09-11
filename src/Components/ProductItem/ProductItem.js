import React, { PureComponent } from 'react'
import style from './ProductItem.module.scss'
import { kabaoPng } from '../../assets/base64/kabao'
class ProductItem extends PureComponent {
  render () {
    return (
      <div className={style.wrapper}>
        <div className={style.imgBox} style={{backgroundImage: `url(${kabaoPng})`}}></div>
        <div className={style.leftBox}>
          <div className={`${style.title} ${style.ellipsis}`}>双人金猪贺岁套餐</div>
          <div className={`${style.introduce} ${style.ellipsis}`}>1公仔(4款任选)+1中爆+2任意饮料</div>
          <div className={`${style.validate} ${style.ellipsis}`}>截止兑回时间：2019年2月28日</div>
          <div className={`${style.money} ${style.ellipsis}`}>
            <div className={style.ordinary}>62元</div>
            <div className={style.member}>会员价55元</div>
          </div>
        </div>
        <div className={style.btn}>购买</div>
      </div>
    )
  }
}

export default ProductItem
