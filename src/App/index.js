import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import Movie from '../Movie'
import Mall from '../Mall'
import Activity from '../Activity'
import Mine from '../Mine'
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
              this.props.history.push({
                pathname: '/movie'
              })
            }}
            data-seed="logId"
          >
            {/* 填入路由页面 */}
            <Route path='/movie' component={Movie}></Route>
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
              // 修改当前路由
              this.props.history.push({
                pathname: '/mall'
              })
            }}
            data-seed="logId"
          >
            {/* 填入路由页面 */}
            {
              <Route path='/mall' component={Mall}></Route>
            }
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
              this.props.history.push({
                pathname: '/activity'
              })
            }}
            data-seed="logId"
          >
            {/* 填入路由页面 */}
            <Route path='/activity' component={Activity}></Route>
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
              this.props.history.push({
                pathname: '/mine'
              })
            }}
            data-seed="logId"
          >
            {/* 填入路由页面 */}
            <Route path='/mine' component={Mine}></Route>
          </TabBar.Item>
        </TabBar>
        
      </Fragment>
    )
  }
}

export default App
