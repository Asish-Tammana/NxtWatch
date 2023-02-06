import styled from 'styled-components'

export const VideoDetailedContainer = styled.div`
  margin-left: 20%;
  width: 80%;
  height: 87vh;
  padding: 15px;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  overflow-y: scroll;

  @media (max-width: 767px) {
    margin-left: 0%;
    width: 100%;
    height: 100vh;
  }
`

export const FailureBgContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.darkTheme ? '#090909' : '#f8f8f9')};
`
export const FailureImage = styled.img`
  width: 30%;
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

export const VideoTitle = styled.p`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  font-size: 20px;
  font-weight: 500;
  margin-top: 20px;
  @media (max-width: 767px) {
    font-size: 17px;
  }
`

export const TitleBelowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${props => (props.darkTheme ? ' #7e858e' : 'grey')};

  @media (max-width: 767px) {
    justify-content: flex-start;
  }
`
export const ViewsDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 15%;
  padding-top: 0px;
  @media (max-width: 767px) {
    width: 38%;
  }
`

export const VDText = styled.p`
  margin-top: 0px;
  font-size: 13px;
  color: ${props => (props.darkTheme ? ' #7e858e' : 'grey')};
`

export const IconsContainer = styled.div`
  width: 23%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const LikeIcon = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 0px;
  background-color: transparent;
  cursor: pointer;
  color: ${props => {
    const {darkTheme, videoLiked} = props

    let fontColor

    if (videoLiked) {
      fontColor = '#2563eb'
    } else if (darkTheme && !videoLiked) {
      fontColor = '#64748b'
    } else {
      fontColor = '#64748b'
    }

    return fontColor
  }};
`

export const DislikeIcon = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 0px;
  background-color: transparent;
  cursor: pointer;
  color: ${props => {
    const {darkTheme, videoDisliked} = props

    let fontColor

    if (videoDisliked) {
      fontColor = '#2563eb'
    } else if (darkTheme && !videoDisliked) {
      fontColor = '#64748b'
    } else {
      fontColor = '#64748b'
    }

    return fontColor
  }};
`
export const SaveIcon = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 0px;
  background-color: transparent;
  cursor: pointer;
  color: ${props => {
    const {darkTheme, videoSaved} = props

    let fontColor

    if (videoSaved) {
      fontColor = '#2563eb'
    } else if (darkTheme && !videoSaved) {
      fontColor = '#64748b'
    } else {
      fontColor = '#64748b'
    }

    return fontColor
  }};
`

export const HorizontalLine = styled.hr`
  background-color: ${props => (props.darkTheme ? ' #7e858e' : 'grey')};
`

export const ChannelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 30px;
`
export const ChannelLogo = styled.img`
  width: 5%;
  margin-right: 15px;
`

export const ChannelTitle = styled.p`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  font-size: 20px;
  font-weight: 500;
  margin-top: 0px;
`
export const Description = styled.p`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`
