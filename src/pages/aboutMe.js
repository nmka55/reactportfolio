import * as data from "../data.json";

import { MainBox } from "../components";
import React from "react";
import { Text } from "grommet";

export default function AboutMe() {
  let children = data?.aboutme?.map((data, index) => (
    <Text key={index} margin="medium" style={{ textAlign: "justify" }}>
      {data}
    </Text>
  ));
  return <MainBox id="About" title="About Me" children={children} />;
}
