import * as data from "../data.json";

import { Box, Text } from "grommet";

import { MainBox } from "../components";
import React from "react";

const Skill = (props) => (
  <Box direction="row" justify="center" align="center">
    {/* <ProgressBar
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
    </ProgressBar> */}
    <Text>{props.name}</Text>
  </Box>
);

export default function Experience() {
  let children = data?.experience?.skills?.map((data, index) => (
    <Skill key={index} name={data.title} progress={data.percent} />
  ));
  return <MainBox id="Experience" title="Experience" children={children} />;
}
