import { Box, Heading, Paragraph, Text } from "grommet";

import React from "react";

export default function AboutMe() {
  return (
    <Box fill flex justify="center" align="center">
      <Heading margin="none" level={1} size="large">
        About me
      </Heading>

      <Box margin="medium">
        <Text
          margin="medium"
          style={{
            textAlign: "justify",
          }}
        >
          Hello, my name is Nyambayar Amarsaikhan. I'm a front-end developer
          living in Ulaanbaatar, Mongolia.
        </Text>

        <Text
          margin="medium"
          style={{
            textAlign: "justify",
          }}
        >
          Quick intro about me: graduated my uni in 2018, worked for 2+ years on
          web and mobile projects (creating pages according to given UI design,
          fixing bugs, basic maintaining).
        </Text>

        <Text
          margin="medium"
          style={{
            textAlign: "justify",
          }}
        >
          Hmm, what else... I'm an introvert who loves memes and Marvel movies.
          Also, have a hobby in photography, tech collecting and their repairs.
        </Text>

        <Text
          margin="medium"
          style={{
            textAlign: "justify",
          }}
        >
          I love my profession because user interface is the face of the
          software and I believe that making it beautiful, user-friendly and
          intuitive is what makes the users to fall in love with the product,
          builds up the trust.
        </Text>

        <Text
          margin="medium"
          style={{
            textAlign: "justify",
          }}
        >
          Currently, I'm looking for a new job that helps me to improve my
          skills and give me new exciting challanges and experiences.
        </Text>
      </Box>
    </Box>
  );
}
