import React, { PureComponent } from 'react'
import style from './ProductItem.module.scss'
import { withRouter } from 'react-router-dom'
import { kabaoPng } from '../../assets/base64/kabao'
import store from '../../store'
import { setGoodsInfo, setTotalMoney } from '../../Mall/store/actionCreators'
class ProductItem extends PureComponent {
  constructor (props) {
    super(props)
  }
  render () {
    const { data } = this.props
    const ordinaryPrice = data.price[0].price / 100
    const memberPrice = data.price[1].price / 100
    return (
      <div className={style.wrapper}>
        <div className={style.imgBox} style={{backgroundImage: `url(${kabaoPng})`}}></div>
        <div className={style.leftBox}>
          <div className={`${style.title} ${style.ellipsis}`}>{data.name}</div>
          <div className={`${style.introduce} ${style.ellipsis}`}>{data.desc}</div>
          <div className={`${style.validate} ${style.ellipsis}`}>截止兑回时间：2019年2月28日</div>
          <div className={`${style.money} ${style.ellipsis}`}>
            <div className={style.ordinary}>{ordinaryPrice}元</div>
            { memberPrice && <div className={style.member}>会员价{memberPrice}元</div>}
          </div>
        </div>
        <div className={style.btn} onClick={this.handleBtnClicked.bind(this, data)}>购买</div>
      </div>
    )
  }
  handleBtnClicked (data) {
    console.log(this.props.history)
    store.dispatch(setGoodsInfo(data))
    const ordinaryPrice = data.price[0].price / 100
    store.dispatch(setTotalMoney(ordinaryPrice))
    this.props.history.push({
      pathname: '/confirmGoods'
    })
  }
}

export default withRouter(ProductItem)
