import {Component} from 'react'
import {Redirect, Route} from 'react-router-dom'
import Cookies from 'js-cookie'

class ProtectedRoute extends Component {
  render() {
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    return <Route {...this.props} />
  }
}

export default ProtectedRoute
