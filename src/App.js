import "./App.css";

import { AboutMe, Contact, Experience, Hero } from "./pages";
import { Box, Grommet, Header, ResponsiveContext } from "grommet";
import { Element, Link } from "react-scroll";

import React from "react";

const theme = {
  global: {
    colors: {
      brand: "#0fa9fa",
      background: "#141f31",
    },
    font: {
      family: "Montserrat",
    },
  },
};

const AppBar = (props) => (
  <Header
    direction="row"
    align="center"
    justify="center"
    background="background"
    pad={{ horizontal: "medium", vertical: "small" }}
    as="header"
    className="navbar"
    style={{ zIndex: 1 }}
    {...props}
  />
);

const AppBarBtn = (props) => (
  <Link
    activeClass="active"
    to={props.label}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
  >
    {props.label}
  </Link>
);

function App() {
  return (
    <Grommet full theme={theme}>
      <ResponsiveContext.Consumer>
        {() => (
          <>
            <AppBar>
              <Box direction="row" gap="medium" wrap>
                <AppBarBtn label="About" />
                <AppBarBtn label="Experience" />
                <AppBarBtn label="Contact" />
              </Box>
            </AppBar>

            <Hero />
            <Element name="About">
              <AboutMe />
            </Element>
            <Experience />
            <Contact />
          </>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
