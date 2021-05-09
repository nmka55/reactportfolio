import * as data from "../data.json";

import { Avatar, Box, Heading, Text } from "grommet";
import React, { useEffect, useRef, useState } from "react";

import NET from "vanta/dist/vanta.net.min";
import TextLoop from "react-text-loop";

export default function Hero() {
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
      <Heading margin="none" level={1} size="large" textAlign="center">
        {data?.main?.firstname} {data?.main?.lastname}
      </Heading>

      <Text size="large" textAlign="center">
        I'm a{" "}
        <TextLoop
          interval={3500}
          delay={1000}
          springConfig={{ stiffness: 100, damping: 10 }}
          children={data?.main?.title}
        />
      </Text>
    </Box>
  );
}
