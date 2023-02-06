/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const GameItemContainer = styled.li`
  width: 30%;
  margin: 10px;

  @media (max-width: 767px) {
    width: 27%;
  }
`
export const GameThumbnail = styled.img`
  width: 100%;
`
export const GameTitle = styled.p`
  font-size: 17px;
  font-weight: 500;
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  @media (max-width: 767px) {
    font-size: 13px;
  }
`
export const Views = styled.p`
  font-size: 13px;
  color: ${props => (props.darkTheme ? ' #7e858e' : '#000000')};
`
