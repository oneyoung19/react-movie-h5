import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import { movieOrdinary, movieSelected, mallOrdinary, mallSelected, activityOrdinary, activitySelected, mineOrdinary, mineSelected } from '../assets/base64/tabbar'
import Movie from '../Movie'
import Mall from '../Mall'
import Activity from '../Activity'
import Mine from '../Mine'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // 页面刷新时，将这里的Tab改为当前路由下对应的值
      selectedTab: '',
      tabList: {
        '/movie': 'Movie',
        '/mall': 'Mall',
        '/activity': 'Activity',
        '/mine': 'Mine'
      }
    }
  }
  componentDidMount() {
    const { tabList } = this.state
    const selectedTab = window.localStorage.getItem('selectedTab')
    console.warn({selectedTab})
    const pathname = this.props.history.location.pathname
    if (selectedTab && tabList[pathname] === selectedTab) {
      this.setState({
        selectedTab
      })
    } else {
      this.setState({
        selectedTab: 'Movie'
      })
    }
    this.props.history.listen(() => {
      const pathname = this.props.history.location.pathname
      console.warn(pathname)
      if (tabList[pathname]) {
        window.localStorage.setItem('selectedTab', tabList[pathname])
        this.setState({
          selectedTab: tabList[pathname]
        })
      }
    })
  }
  render () {
    return (
      <Fragment>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#000"
          barTintColor="white"
        >
          <TabBar.Item
            title="电影"
            key="Movie"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${movieOrdinary}) center center /  21px 21px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${movieSelected}) center center /  21px 21px no-repeat` }}
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
            title="商城"
            key="Mall"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${mallOrdinary}) center center /  21px 21px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${mallSelected}) center center /  21px 21px no-repeat` }}
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
            title="活动"
            key="Activity"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${activityOrdinary}) center center /  21px 21px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${activitySelected}) center center /  21px 21px no-repeat` }}
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
            title="我的"
            key="Mine"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${mineOrdinary}) center center /  21px 21px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${mineSelected}) center center /  21px 21px no-repeat` }}
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
