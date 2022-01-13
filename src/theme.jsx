import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";

const theme = extendTheme({
  textStyles: {
    TextReduction: {
      fontSize: "clamp (0rem,10vw, 0.9rem)",
    },
  },
});

export default theme;
