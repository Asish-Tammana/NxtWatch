import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  height: 87vh;
  width: 80%;
  margin-left: 20%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.darkTheme ? '#181919' : '#f0f0f1')};
`

export const NotFoundImage = styled.img`
  width: 40%;
`

export const NotFoundTitle = styled.h1`
  font-size: 30px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`

export const NotFoundDescription = styled.p`
  color: ${props => (props.darkTheme ? '#616e7c' : '#000000')};
`
