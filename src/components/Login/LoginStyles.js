import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.darkTheme ? '#201e1d' : '#ffffff')};
`

export const LoginContainer = styled.form`
  border-radius: 5px;
  padding: 10px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#ffffff')};
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-shadow: ${props => !props.darkTheme && '0px 4px 16px 0px #bfbfbf'};

  @media (max-width: 767px) {
    width: 90%;
  }
`

export const LogoImage = styled.img`
  width: 50%;
  margin: 10px;
  margin-bottom: 20px;
  align-self: center;
`
export const InputLabel = styled.label`
  color: ${props => (props.darkTheme ? '#ffffff' : '#475569')};
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const InputBox = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 3px;
  border: 1px solid #475569;
  color: ${props => (props.darkTheme ? '#ffffff' : '#0f0f0f')};
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#ffffff')};
`

export const InputLabelSP = styled.label`
  color: ${props => (props.darkTheme ? '#ffffff' : '#0f0f0f')};
`

export const LoginButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  margin-top: 25px;
  padding: 7px;
  border: 0px;
  border-radius: 5px;
  width: 100%;
  font-weight: bold;
  align-self: center;
  cursor: pointer;
`

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 0px;
`
