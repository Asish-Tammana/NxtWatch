import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 87vh;
  width: 80%;
  margin-left: 20%;
  overflow-y: scroll;

  @media (max-width: 767px) {
    width: 100%;
    margin-left: 0px;
  }
`

export const PremiumContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 40vh;
  padding: 20px;
  background-size: cover;
  display: ${props => (props.displayPremiumContainer ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 767px) {
    height: 25vh;
  }
`

export const LogoImage = styled.img`
  width: 120px;
`

export const CloseButton = styled.button`
  border: 0px;
  background-color: transparent;
`

export const GetItNowButton = styled.button`
  border-style: solid;
  border-width: 1px;
  background-color: transparent;
  padding: 7px;
  width: 100px;
  border-radius: 5px;
  color: #000000;
  border-color: #000000;
  cursor: pointer;
  margin: 10px;
`

export const VideosContainer = styled.div`
  padding: 20px;

  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};

  @media (max-width: 767px) {
    padding: 10px;
  }
`

export const VideoItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const SearchContainer = styled.form`
  display: flex;
  margin-bottom: 20px;
`
export const SearchInput = styled.input`
  width: 400px;
  padding: 5px;
  color: grey;
  border: 1px solid grey;
  outline: none;
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
`

export const SearchButton = styled.button`
  border: 1px solid grey;
  width: 50px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#181818')};
  background-color: ${props => (props.darkTheme ? '#211f1d' : '#f9f9f9')};
  cursor: pointer;
`

export const FailureBgContainer = styled.div`
  height: ${props => (props.displayPremiumContainer ? '' : '100vh')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImage = styled.img`
  width: ${props => (props.displayPremiumContainer ? '30%' : '45%')};
  margin-top: 20px;
`

export const FailureHeading = styled.h1`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`

export const FailurePara = styled.p`
  color: ${props => (props.darkTheme ? '#616e7c' : '#000000')};
`

export const RetryButton = styled.button`
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
