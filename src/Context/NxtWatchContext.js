import React from 'react'

const NxtWatchContext = React.createContext({
  darkTheme: false,
  showPassword: false,
  usernameInput: '',
  passwordInput: '',
  loginErrorMsg: '',
  activeTab: 'HOME',
  tabsList: [],
  displayPremiumContainer: true,
  savedVideosList: [],
  TogglePasswordDisplay: () => {},
  updateUsername: () => {},
  updatePassword: () => {},
  onSubmitFailure: () => {},
  changeTheme: () => {},
  updateActiveTab: () => {},
  removePremiumContainer: () => {},
  updateSavedVideosList: () => {},
  removeFromSavedList: () => {},
})
export default NxtWatchContext
