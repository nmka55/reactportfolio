import * as data from "../data.json";

import { Avatar, Box, Button, Text } from "grommet";
import { Facebook, Github, Linkedin, MailOption } from "grommet-icons";

import { MainBox } from "../components";
import React from "react";

export default function AboutMe() {
  let children = (
    <>
      <Avatar size="10em" src={data?.main?.avatar} />
      <Box margin="medium">
        <Text>
          {data?.main?.firstname} {data?.main?.lastname}
        </Text>
        <Box margin="medium" direction="row" justify="between">
          <Button plain icon={<MailOption />} />
          <Button plain icon={<Facebook />} />
          <Button plain icon={<Linkedin />} />
          <Button plain icon={<Github />} />
        </Box>
      </Box>
    </>
  );
  return (
    <MainBox
      id="Contact"
      title="Contact"
      children={children}
      innerBoxProps={{
        direction: "row",
        justify: "center",
        align: "center",
      }}
    />
  );
}
