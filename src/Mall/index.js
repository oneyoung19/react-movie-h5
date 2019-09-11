import React, { PureComponent } from 'react'
import style from './mall.module.scss'
import ProductItem from '../Components/ProductItem/ProductItem'

class Mall extends PureComponent {
  render () {
    return (
      <div className={style.wrapper}>
        {/* 坐标 */}
        <div className={style.location}>
          <div className={style.rightBox}>
            <div className={style.localIcon}></div>
            <div className={style.localName}>北京望京新天地</div>
          </div>
          <div className={style.arrowIcon}></div>
        </div>
        {/* 会员卡 */}
        <div className={style.scroll}>
          <div className={style.memberCard}>
            <div className={style.amount}>50<span className={style.yuan}>元</span></div>
            <div className={style.rightBox}>
              <div className={style.equity}>可享受超值卖品会员价等权益</div>
              <div className={style.period}>
                有效期：1年
              </div>
            </div>
            <div className={style.btn}>
              <div className={style.text}>成为会员</div>
              <div className={style.icon}></div>
            </div>
          </div>
          {/* 卖品区 */}
          <div className={style.productList}>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
          </div>
        </div>
      </div>
    )
  }
}

export default Mall
