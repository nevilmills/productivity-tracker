import { TextField } from "@mui/material";
import { FieldProps } from "formik";
import React from "react";

interface InputFieldProps extends FieldProps {
  placeholder?: string;
  type?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  type,
  field,
}) => {
  if (type) {
    return <TextField placeholder={placeholder} type={type} {...field} />;
  } else {
    return <TextField placeholder={placeholder} {...field} />;
  }
};
