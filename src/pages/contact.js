import { Box, Button, Heading, Paragraph, Text } from "grommet";
import {
  Facebook,
  Github,
  Link,
  Linkedin,
  MailOption,
  Phone,
} from "grommet-icons";

import React from "react";

export default function AboutMe() {
  return (
    <Box fill flex justify="center" align="center">
      <Heading margin="none" level={1} size="large">
        Contact me
      </Heading>

      <Box margin="medium">
        Nyambayar Amarsaikhan
        <Box margin="medium" direction="row" justify="between">
          <Button primary icon={<Phone />} label="Call me" />{" "}
          <Button plain label="Write an email" />
        </Box>
        <Box margin="medium" direction="row" justify="evenly">
          <Button plain icon={<Facebook />} />
          <Button plain icon={<Linkedin />} />
          <Button plain icon={<Github />} />
        </Box>
      </Box>
    </Box>
  );
}
