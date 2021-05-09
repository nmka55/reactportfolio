import { Box, Heading } from "grommet";

import React from "react";

export default function MainBox(props) {
  return (
    <Box fill flex justify="center" align="center">
      <Heading margin="1em 0" level={1} size="large">
        {props.title}
      </Heading>
      <Box id={props.id} margin="medium" {...props.innerBoxProps}>
        {props.children}
      </Box>
    </Box>
  );
}
