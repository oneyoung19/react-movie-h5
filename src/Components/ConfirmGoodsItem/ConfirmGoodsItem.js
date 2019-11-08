import React, { Component } from 'react'
import style from './confirmGoodsItem.module.scss'
import { connect } from 'react-redux'
import { minusTotalMoney, plusTotalMoney } from '../../Mall/store/actionCreators'
import { kabaoPng } from '../../assets/base64/kabao'
import minusPng from '../../assets/images/minus.png'
import plusPng from '../../assets/images/plus.png'

class ConfirmGoodsItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      num: 1
    }
  }
  render () {
    const { data, minusTotalMoney, plusTotalMoney } = this.props
    const ordinaryPrice = data.price[0].price
    const memberPrice = data.price[1].price
    return (
      <div className={style.wrapper}>
        {/* 卖品照片 */}
        <div className={style.img}>
          <img src={kabaoPng} alt=""/>
        </div>
        {/* 卖品信息 */}
        <div className={style.content}>
          <div className={style.title}>{data.name}</div>
          <div className={style.describe}>{data.desc}</div>
          <div className={style.time}>截止兑回时间：2019.12.30</div>
          <div className={style.price}>
            <div className={style.ordinary}>￥{ordinaryPrice}</div>
            <div className={style.member}>会员价{memberPrice}元</div>
          </div>
          {/* 按钮 */}
          <div className={style.btn}>
            <div className={style.minus} onClick={minusTotalMoney.bind(this, ordinaryPrice)}>
              <img src={minusPng} alt=""/>
            </div>
            <div className={style.text}>{this.state.num}</div>
            <div className={style.plus} onClick={plusTotalMoney.bind(this, ordinaryPrice)}>
              <img src={plusPng} alt=""/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  minusTotalMoney (price) {
    if (this.state.num <= 1) {
      return
    }
    const newNum = this.state.num - 1
    this.setState({
      num: newNum
    })
    dispatch(minusTotalMoney(price))
  },
  plusTotalMoney (price) {
    const newNum = this.state.num + 1
    this.setState({
      num: newNum
    })
    dispatch(plusTotalMoney(price))
  }
})

export default connect(null, mapDispatchToProps)(ConfirmGoodsItem)
