import styled from 'styled-components'

export const MediumPopUp = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`

export const MobilePopUp = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`

export const LogoutButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  width: 80px;
  padding: 5px;
  border-radius: 3px;
  border-style: solid;
  border-width: 2px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#3b82f6')};
  border-color: ${props => (props.darkTheme ? '#ffffff' : '#3b82f6')};
`
export const LogoutMobileButton = styled.button`
  background-color: transparent;
  border: 0px;
  font-size: 25px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`

export const LogoutPopUp = styled.div`
  background-color: ${props => (props.darkTheme ? '#201e1d' : '#ffffff')};
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  box-shadow: ${props => !props.darkTheme && '0px 4px 16px 0px #bfbfbf'};
`
export const CloseButton = styled.button`
  border-style: solid;
  border-width: 1px;
  background-color: transparent;
  padding: 7px;
  width: 70px;
  border-radius: 5px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  border-color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  cursor: pointer;
  margin: 10px;
`

export const ConfirmLogout = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  margin-top: 25px;
  padding: 8px;
  border: 0px;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
  width: 70px;
`
