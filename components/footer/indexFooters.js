"use client";

import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { FaGithub } from "react-icons/fa";

const IndexFooters = () => {
  const handleGitHubClick = () => {
    window.location.href = "https://github.com/qluke/convertcase-online";
  };

  return (
    <Container
      as="footer"
      position="relative"
      bottom="0"
      role="contentinfo"
      maxW="100%"
      py="1rem"
    >
      <Stack>
        <Stack justify="space-between" direction="row" align="center">
          <Text>Luke</Text>
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              onClick={handleGitHubClick}
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Stack>
      </Stack>
    </Container>
  );
}

export default IndexFooters;
