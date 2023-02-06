/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const LoaderBgContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
`
