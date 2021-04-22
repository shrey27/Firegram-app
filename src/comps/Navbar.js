import { React, useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body{
    background-color : ${props => props.theme.mode === 'dark' ? '#111' : '#EEE'};
    color : ${props => props.theme.mode === 'dark' ? '#FF8C00' : '#4e4e4e'};
}
`

const Navbar = () => {
  const [theme,setTheme] = useState({mode:'light'});
  return (
    <ThemeProvider theme={theme}>
        <>
        <GlobalStyle/>
        <nav className="nav-bar">
            <h1>Pict..fy</h1>
            <h2>Dark mode</h2>
            <label class="switch" >
                <input class="buttoninput" type="checkbox" 
                onChange={ () => setTheme(theme.mode === 'dark' ? {mode : 'light'} : {mode : 'dark'}) }/>
                <div class="slider round"></div>
            </label>
        </nav>
        </>
    </ThemeProvider>
  )
}

export default Navbar;