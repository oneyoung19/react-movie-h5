import React, { Component, Fragment } from 'react'
import { TabBar } from 'antd-mobile'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedTab: 'Movie'
    }
  }
  render () {
    return (
      <Fragment>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="Movie"
            key="Movie"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'Movie'}
            onPress={() => {
              this.setState({
                selectedTab: 'Movie'
              })
            }}
            data-seed="logId"
          >
            {/* 填入路由页面 */}
          </TabBar.Item>
          <TabBar.Item
            title="Mall"
            key="Mall"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'Mall'}
            onPress={() => {
              this.setState({
                selectedTab: 'Mall'
              })
            }}
            data-seed="logId"
          >
            {/* 填入路由页面 */}
          </TabBar.Item>
          <TabBar.Item
            title="Activity"
            key="Activity"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'Activity'}
            onPress={() => {
              this.setState({
                selectedTab: 'Activity'
              })
            }}
            data-seed="logId"
          >
            {/* 填入路由页面 */}
          </TabBar.Item>
          <TabBar.Item
            title="Mine"
            key="Mine"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'Mine'}
            onPress={() => {
              this.setState({
                selectedTab: 'Mine'
              })
            }}
            data-seed="logId"
          >
            {/* 填入路由页面 */}
          </TabBar.Item>
        </TabBar>
        
      </Fragment>
    )
  }
}

export default App
