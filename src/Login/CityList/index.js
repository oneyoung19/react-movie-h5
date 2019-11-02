import React, { PureComponent } from 'react'

class CityList extends PureComponent {
  componentDidMount () {
    const history = this.props.history
    console.log({history})
  }
  render () {
    return (
      <div>CityList</div>
    )
  }
}

export default CityList
