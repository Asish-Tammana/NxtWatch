import styled from 'styled-components'

export const HeaderBgContainer = styled.nav`
  padding: 20px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.darkTheme ? '#201e1d' : '#ffffff')};
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  height: 70px;

  @media (max-width: 767px) {
    padding: 5px;
    padding-left: 5px;
    padding-right: 5px;
    width: 100%;
  }
`

export const LogoImage = styled.img`
  width: 120px;
`
export const NavItemsContainer = styled.div`
  width: 19%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    width: 40%;
  }
`

export const ThemeButton = styled.button`
  font-size: 25px;
  cursor: pointer;
  border: 0px;
  background-color: transparent;
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`

export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;

  @media (max-width: 767px) {
    display: none;
  }
`

export const MenuButton = styled.button`
  font-size: 25px;
  cursor: pointer;
  border: 0px;
  background-color: transparent;
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};

  @media (min-width: 768px) {
    display: none;
  }
`
