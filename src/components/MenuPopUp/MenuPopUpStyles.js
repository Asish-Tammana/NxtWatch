import styled from 'styled-components'

export const PopUpMenu = styled.div`
  height: 100vh;
  background-color: #fff;
  width: 400px;
  padding: 20px;
  background-color: ${props => (props.darkTheme ? '#201e1d' : '#ffffff')};
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`

export const Button = styled.div`
  background-color: transparent;
  border: 0px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  font-size: 20px;
`

export const BottomContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MainContainer = styled.div`
  width: 100%;
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`
export const ItemText = styled.p`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`
