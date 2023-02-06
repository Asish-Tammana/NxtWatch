import styled from 'styled-components'

export const VideoItemContainer = styled.li`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 50px;
  padding-right: 50px;

  @media (max-width: 767px) {
    padding-left: 20px;
    padding-right: 10px;
    align-items: center;
  }
`

export const ThumbnailImage = styled.img`
  width: 50%;
`
export const VideoItemTextContainer = styled.div`
  padding-left: 20px;
`

export const VideoItemHeading = styled.p`
  font-size: 25px;
  margin-top: 0px;
  font-weight: 500;
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
  @media (max-width: 767px) {
    font-size: 15px;
  }
`

export const ChannelName = styled.p`
  font-size: 15px;
  color: ${props => (props.darkTheme ? ' #7e858e' : '#000000')};
`
export const ViewsDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 45%;
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
