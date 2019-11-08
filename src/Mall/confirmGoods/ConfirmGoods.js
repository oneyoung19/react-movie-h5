import React, { Component } from 'react'
import style from './confirmGoods.module.scss'
import ConfirmGoodsItem from '../../Components/ConfirmGoodsItem/ConfirmGoodsItem'
import phonePng from '../../assets/images/phone.png'
import store from '../../store'
import { setGoodsInfo } from '../store/actionCreators'
// 这页使用了原生的redux，现在使用下react-redux
import { connect } from 'react-redux'

class ConfirmGoods extends Component {
  constructor (props) {
    super(props)
    const goodsInfo = store.getState().goodsReducer.goodsInfo
    const totalMoney = store.getState().goodsReducer.totalMoney
    this.state = {
      goodsInfo,
      totalMoney
    }
  }
  componentDidMount () {
    const { goodsInfo } = this.state
    store.dispatch(setGoodsInfo(goodsInfo.price[0].price))
  }
  render () {
    const { goodsInfo } = this.state
    const { totalMoney } = this.props
    return (
      <div className={style.wrapper}>
        {/* 地址 */}
        <div className={style.address}>
          <div className={style.title}>北京西三旗物美</div>
          <div className={style.name}>北京市海淀区越秀路99号二层</div>
        </div>
        {/* 卖品 */}
        <ConfirmGoodsItem data={goodsInfo}></ConfirmGoodsItem>
        {/* 手机号 */}
        <div className={style.phone}>
          <div className={style.img}>
            <img src={phonePng} alt=""/>
          </div>
          <div className={style.info}>
            <div className={style.phoneNum}>17610097020</div>
            <div className={style.text}>购买成功后，会收到取票验证码</div>
          </div>
        </div>
        {/* 使用须知 */}
        <div className={style.notice}>
          <div className={style.title}>购票须知</div>
          <div className={style.item}>
          1.本次为购票优惠及权益卡，卡内无余额，不可充值；
          </div>
          <div className={style.item}>
          2.本卡一经出售不可退换；
          </div>
          <div className={style.item}>
          3.本卡可以在大地影院以及橙天嘉禾影院app、微信公众号、微信
小程序购票使用；
          </div>
          <div className={style.item}>
          4.线下消费时，须主动出示会员卡二维码享受权益；
          </div>
          <div className={style.item}>
          5.线上开卡用户不可在影院补换实体卡；
          </div>
          <div className={style.item}>
          6.会员卡初始密码为开卡手机号后6位；
          </div>
          <div className={style.item}>
          7.生日券在生日当月1号发放，本月过生日新开卡用户将在三个工
作日内发放；
          </div>
        </div>
        {/* 确认 */}
        <div className={style.footer}>
          <div className={style.totalMoney}>
            <div className={style.text}>合计：</div>
            <div className={style.money}>￥{totalMoney}</div>
          </div>
          <div className={style.confirmBtn}>确认订单</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  totalMoney: state.goodsReducer.totalMoney
})

export default connect(mapStateToProps, null)(ConfirmGoods)
