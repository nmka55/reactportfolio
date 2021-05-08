import { Box, Heading, Text } from "grommet";

import ProgressBar from "react-customizable-progressbar";
import React from "react";

const Skill = (props) => (
  <Box direction="row" justify="center" align="center">
    <ProgressBar
      radius={40}
      progress={props.progress}
      strokeWidth={2}
      strokeColor="indianred"
      trackStrokeWidth={2}
      pointerRadius={3}
      pointerStrokeWidth={2}
      pointerStrokeColor="indianred"
    >
      <div className="indicator">
        <div>{props.progress}%</div>
      </div>
    </ProgressBar>
    <Text>{props.name}</Text>
  </Box>
);

export default function AboutMe() {
  return (
    <Box fill flex justify="center" align="center">
      <Heading margin="none" level={1} size="large">
        Experience
      </Heading>
      <Box margin="medium">
        <Skill name="Javascript (React, React Native)" progress={80} />
        <Skill name="Javascript (React, React Native)" progress={80} />
        <Skill name="Javascript (React, React Native)" progress={80} />
        <Skill name="Javascript (React, React Native)" progress={80} />
      </Box>
    </Box>
  );
}
