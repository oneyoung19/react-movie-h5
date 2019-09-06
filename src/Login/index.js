import React, { Component, Fragment } from 'react'

import { Button } from 'antd-mobile'
class Login extends Component {
  render () {
    return (
      <Fragment>
        <div>
          <h1>Login</h1>
        </div>
        <Button type="primary" size="small">click</Button>
      </Fragment>
    )
  }
}

export default Login
