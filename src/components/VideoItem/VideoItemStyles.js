import styled from 'styled-components'

export const VideItemContainer = styled.div`
  width: 30%;
  margin: 10px;

  @media (max-width: 767px) {
    width: 46%;
    margin: 5px;
  }
`
export const Thumbnail = styled.img`
  width: 100%;
`

export const VideoItemBottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5px;
`

export const ChannelLogo = styled.img`
  width: 15%;
`
export const VideoItemTextContainer = styled.div`
  padding: 0px;
`

export const Title = styled.p`
  margin-top: 0px;
  font-size: 15px;
  font-weight: 400;
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};

  @media (max-width: 767px) {
    font-size: 10px;
  }
`

export const ChannelName = styled.p`
  font-size: 13px;
  color: ${props => (props.darkTheme ? ' #7e858e' : '#000000')};
`
export const ViewsDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60%;
  padding-top: 0px;
  color: ${props => (props.darkTheme ? ' #7e858e' : '#000000')};

  @media (max-width: 767px) {
    width: 100%;
  }
`

export const VDText = styled.p`
  margin-top: 0px;
  font-size: 13px;
`
