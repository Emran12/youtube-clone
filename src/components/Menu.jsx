import React from 'react'
import styled from 'styled-components'
import logo from "../images/logo.png"
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import FeedIcon from '@mui/icons-material/Feed';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
const Container = styled.div`
flex: 1; 
background-color: ${({theme})=> theme.bgLighter};
height: 100vh;
color: ${({theme})=>theme.text}; 
position: sticky; 
font-size: 14px;
top: 0;
`
const Wrapper = styled.div`
padding: 18px 26px; 
`

const Logo = styled.div`
display: flex; 
align-items: center; 
gap: 5px; 
`
const Img = styled.img`
height: 25px; 
`
const Item = styled.div`
display: flex; 
align-items: center; 
gap: 20px; 
cursor: pointer; 
padding: 7.5px 0px; 
`

const Hr = styled.hr`
margin: 15px 0px;
border: .5px solid ${({theme})=>theme.soft}; 
`
const Login = styled.div``; 
const Button = styled.button`
padding: 5px 15px;
background-color: transparent; 
border: 1px solid #3ea6ff; 
color: #3ea6ff; 
border-radius: 3px; 
font-weight: 500; 
margin-top: 10px; 
cursor: pointer; 
display: flex; 
gap: 5px;
align-items: center;`

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({darkMode, setDarkMode}) => {
  return (
      <Container>
          <Wrapper>
              <Logo>
                  <Img src={logo} /> 
                  YouTube
              </Logo>
              <Item>
                  <HomeIcon /> 
                  Home
              </Item>
              <Item>
                  <ExploreIcon /> 
                  Explore
              </Item>
              <Item>
                  <SubscriptionsIcon /> 
                   Subscription
              </Item>
              <Hr></Hr>
              <Item>
                  <LibraryAddIcon /> 
                  Library
              </Item>
              <Item>
                  <HistoryIcon /> 
                  History
              </Item>
              <Hr></Hr>
              <Login>
                  Sign in to like videos, comment, and subscribe.
                  <Button><AssignmentIndOutlinedIcon />Sign in</Button>
              </Login>
              <Hr></Hr>
              <Title>Best of YouTube</Title>
              <Item>
                  <LibraryMusicIcon /> 
                  Music
              </Item>
              <Item>
                  <SportsBasketballIcon /> 
                  Sports
              </Item>
              
              <Item>
                  <SportsEsportsIcon /> 
                  Gaming
              </Item>
              <Item>
                  <MovieCreationIcon /> 
                  Movies
              </Item>
              <Item>
                  <FeedIcon /> 
                  News
              </Item>
              <Item>
                  <LiveTvIcon /> 
                  Live
              </Item>
              <Hr></Hr>
              <Item>
                  <SettingsApplicationsIcon /> 
                  Settings
              </Item>
              <Item>
                  <FlagOutlinedIcon /> 
                  Report
              </Item>
              <Item>
                  <HelpCenterOutlinedIcon /> 
                  Help
              </Item>
              <Item onClick={()=> setDarkMode(!darkMode)}>
                  <SettingsBrightnessOutlinedIcon /> 
                  {darkMode ? "Light" : "Dark"} Mode
              </Item>  
      </Wrapper>
    </Container>
  )
}

export default Menu
