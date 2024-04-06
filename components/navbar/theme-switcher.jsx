"use client";

import { FaMoon, FaSun } from "react-icons/fa";
import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import styles from "./theme-switcher.module.css";

export default function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box className={styles.container}>
      {colorMode === "dark" ? (
        <IconButton
          aria-label="dark"
          bg="transparent"
          fontSize="20px"
          icon={<FaSun />}
          onClick={toggleColorMode}
        />
      ) : (
        <IconButton
          aria-label="light"
          bg="transparent"
          icon={<FaMoon />}
          onClick={toggleColorMode}
          fontSize="20px"
        />
      )}
    </Box>
  );
}
