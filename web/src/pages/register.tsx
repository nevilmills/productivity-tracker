import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface registerProps {}

export const Register: React.FC<registerProps> = ({}) => {
  return (
    <Box>
      <Box>
        <TextField />
      </Box>
      <TextField />

      <Button>yo button</Button>
    </Box>
  );
};
