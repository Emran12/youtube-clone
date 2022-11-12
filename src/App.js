import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Theme";
import { useState } from "react";

const Container = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  flex: 7;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Wrapper>
          <Navbar />
          <h1>cards</h1>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
