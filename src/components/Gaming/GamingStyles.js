import styled from 'styled-components'

export const GamingBgContainer = styled.div`
  height: 87vh;
  width: 80%;
  margin-left: 20%;
  overflow-y: scroll;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};

  @media (max-width: 767px) {
    width: 100%;
    margin-left: 0%;
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

export const TotalGamingContainer = styled.div`
  width: 100%;
`

export const HeadingContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#181919' : '#f0f0f1')};
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
export const IconContainer = styled.div`
  padding: 20px;
  border-radius: 50px;
  background-color: ${props => (props.darkTheme ? '#000000' : '#e1e9f0')};
  margin-right: 20px;
`

export const Heading = styled.h1`
  color: ${props => (props.darkTheme ? '#ffffff' : '#000000')};
`
export const GamingItemContainer = styled.ul`
  background-color: ${props => (props.darkTheme ? '#0e0e0f' : '#f8f8f9')};
  padding: 10px;
  margin-top: 0px;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    justify-content: flex-start;
  }
`
