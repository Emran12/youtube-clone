import React from 'react'
import styled from 'styled-components'
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Container = styled.div`
  position: sticky;
  top: 0; 
  height: 56px; 
  background-color: ${({theme}) => theme.bgLighter}
  
`

const Wrapper = styled.div`
display: flex; 
align-items: center; 
justify-content: flex-end; 
positon: relative; 

`
const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  `
const Input = styled.input`
border: none;
background-color: transparent;
outline: none;
color: ${({ theme }) => theme.text};
`
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

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search'></Input> 
          <SearchOutlinedIcon />
        </Search>
         <Button><AssignmentIndOutlinedIcon />Sign in</Button>
      </Wrapper>
    </Container>
  )
}

export default Navbar
