import React, { PureComponent } from 'react'
import { Wrapper } from './style'
import { PullToRefresh } from 'antd-mobile'
import ActivityItem from '../Components/ActivityItem/ActivityItem'
import { getActivities } from '../api/index'

class Activity extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      list: [],
    }
  }
  componentDidMount () {
    // 获取活动列表
    getActivities().then(res => {
      console.warn({res})
      if (res.status === 'success' && res.code === 200) {
        this.setState({
          list: res.data
        })
      }
    })
  }
  render () {
    const { list } = this.state
    
    return (
      <Wrapper>
        <PullToRefresh
          refreshing={false}
          onRefresh={() => {alert(111111)}}
        >
          {
            list.map(item => (
              <ActivityItem key={item.id} data={item}></ActivityItem>
            ))
          }
        </PullToRefresh>
      </Wrapper>
    )
  }
}

export default Activity
