import "./App.css";

import { AboutMe, Contact, Experience } from "./pages";
import {
  Avatar,
  Box,
  Button,
  Grommet,
  Header,
  Heading,
  ResponsiveContext,
  Text,
} from "grommet";
import React, { useEffect, useRef, useState } from "react";

import NET from "vanta/dist/vanta.net.min";
import TextLoop from "react-text-loop";

const theme = {
  global: {
    colors: {
      brand: "#0fa9fa",
      background: "#141f31",
      control: { dark: "brand", light: "brand" },
    },
    font: {
      family: "Montserrat",
    },
    paragraph: {
      extend: { textAlign: "justify", color: "red" },
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
  <Button
    plain
    primary={props.primary ? true : false}
    label={props.label}
    onClick={() => {}}
  />
);

function App() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          color: 0x0fa9fa,
          backgroundColor: 0x141f31,
          scale: 0.8,
          scaleMobile: 1.5,
          points: 12.0,
          maxDistance: 15.0,
          spacing: 18.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <Grommet full theme={theme}>
      <ResponsiveContext.Consumer>
        {(size) => (
          <>
            <AppBar>
              <Box direction="row" gap="medium" wrap>
                <AppBarBtn label="About" />
                <AppBarBtn label="Experience" />
                <AppBarBtn label="Contact" />
              </Box>
            </AppBar>

            <Box
              fill
              flex
              ref={myRef}
              direction="column"
              pad="medium"
              gap="medium"
              align="center"
              justify="center"
              overflow={{ horizontal: "hidden" }}
              animation={{
                type: "fadeIn",
                delay: 1000,
                duration: 2000,
                size: "xlarge",
              }}
            >
              <Avatar
                size="10em"
                src="https://media-exp1.licdn.com/dms/image/C5603AQE77l5mukA47A/profile-displayphoto-shrink_800_800/0/1588339348279?e=1623283200&v=beta&t=NwI-AcEaK_w87d4smfIvwzKCbMsQu2bKXjTeV4_wbiM"
              />
              <Heading margin="none" level={1} size="large" textAlign="center">
                Nyambayar Amarsaikhan
              </Heading>

              <Text size="large" textAlign="center">
                I'm a{" "}
                <TextLoop
                  interval={3500}
                  delay={1000}
                  springConfig={{ stiffness: 100, damping: 10 }}
                  children={[
                    "Front-end Developer 💻",
                    "Techie 📱",
                    "Amateur Photographer 📸",
                    "Memeophile 😄",
                    "MCU fan 📼",
                  ]}
                />
              </Text>
            </Box>

            <AboutMe />
            <Experience />
            <Contact />
          </>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
