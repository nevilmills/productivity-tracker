import { Box } from "@mui/material";
import React from "react";

export const Wrapper: React.FC<{}> = ({ children }) => {
  return (
    <Box mt={8} mx="auto" maxWidth={400} width="100%">
      {children}
    </Box>
  );
};
