import React, { PureComponent } from 'react'
import { Wrapper } from './style'
import { PullToRefresh } from 'antd-mobile'
import ActivityItem from '../Components/ActivityItem/ActivityItem'

class Activity extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      list: [0,1,2,3,4,5],
    }
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
              <ActivityItem key={item}></ActivityItem>
            ))
          }
        </PullToRefresh>
      </Wrapper>
    )
  }
}

export default Activity
