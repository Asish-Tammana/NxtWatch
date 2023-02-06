import styled from 'styled-components'

export const MenuContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  padding-left: 0px;
  padding-right: 0px;
  height: 90vh;
  background-color: ${props => (props.darkTheme ? '#201e1d' : '#ffffff')};
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  position: fixed;
  overflow: auto;

  @media (max-width: 767px) {
    display: none;
  }
`
export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`
export const ContactLogo = styled.img`
  height: 30px;
  width: 30px;
`

export const ItemText = styled.p`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`
