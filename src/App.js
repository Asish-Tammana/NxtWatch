import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import NxtWatchContext from './Context/NxtWatchContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import './App.css'

const tabsList = [
  {
    id: 'HOME',
    displayText: 'Home',
    linkAddress: '/',
  },
  {
    id: 'TRENDING',
    displayText: 'Trending',
    linkAddress: '/trending',
  },
  {
    id: 'GAMING',
    displayText: 'Gaming',
    linkAddress: '/gaming',
  },
  {
    id: 'SAVED_VIDEOS',
    displayText: 'Saved Videos',
    linkAddress: '/saved-videos',
  },
]

class App extends Component {
  state = {
    darkTheme: false,
    showPassword: false,
    usernameInput: 'henry',
    passwordInput: 'henry_the_developer',
    loginErrorMsg: '',
    activeTab: 'HOME',
    displayPremiumContainer: true,
    savedVideosList: [],
  }

  TogglePasswordDisplay = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  updateUsername = event => {
    this.setState({
      usernameInput: event.target.value,
    })
  }

  updatePassword = event => {
    this.setState({
      passwordInput: event.target.value,
    })
  }

  onSubmitFailure = loginErrorMsg => {
    this.setState({loginErrorMsg})
  }

  changeTheme = () => {
    this.setState(prevState => ({
      darkTheme: !prevState.darkTheme,
    }))
  }

  updateActiveTab = givenTab => {
    this.setState({
      activeTab: givenTab,
    })
  }

  removePremiumContainer = () => {
    this.setState({
      displayPremiumContainer: false,
    })
  }

  updateSavedVideosList = newVideoDetails => {
    const {savedVideosList} = this.state

    const index = savedVideosList.findIndex(
      each => each.id === newVideoDetails.id,
    )

    if (index === -1) {
      this.setState(
        prevState => ({
          savedVideosList: [...prevState.savedVideosList, newVideoDetails],
        }),
        this.output,
      )
    }
  }

  output = () => {
    const {savedVideosList} = this.state
    console.log(savedVideosList)
  }

  removeFromSavedList = id => {
    const {savedVideosList} = this.state

    const index = savedVideosList.findIndex(each => each.id === id)

    if (index !== -1) {
      savedVideosList.pop(index)
    }

    this.setState({
      savedVideosList,
    })
  }

  render() {
    const {
      darkTheme,
      showPassword,
      usernameInput,
      passwordInput,
      loginErrorMsg,
      activeTab,
      displayPremiumContainer,
      savedVideosList,
    } = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          darkTheme,
          showPassword,
          usernameInput,
          passwordInput,
          loginErrorMsg,
          activeTab,
          tabsList,
          displayPremiumContainer,
          savedVideosList,
          TogglePasswordDisplay: this.TogglePasswordDisplay,
          updateUsername: this.updateUsername,
          updatePassword: this.updatePassword,
          onSubmitFailure: this.onSubmitFailure,
          changeTheme: this.changeTheme,
          updateActiveTab: this.updateActiveTab,
          removePremiumContainer: this.removePremiumContainer,
          updateSavedVideosList: this.updateSavedVideosList,
          removeFromSavedList: this.removeFromSavedList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute
            exact
            path="/"
            render={() => <Home updateActiveTab={this.updateActiveTab} />}
          />
          <ProtectedRoute
            exact
            path="/trending"
            render={() => <Trending updateActiveTab={this.updateActiveTab} />}
          />
          <ProtectedRoute
            exact
            path="/gaming"
            render={() => <Gaming updateActiveTab={this.updateActiveTab} />}
          />
          <ProtectedRoute
            exact
            path="/saved-videos"
            render={() => (
              <SavedVideos updateActiveTab={this.updateActiveTab} />
            )}
          />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />

          <Route
            path="/not-found"
            render={() => <NotFound updateActiveTab={this.updateActiveTab} />}
          />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
