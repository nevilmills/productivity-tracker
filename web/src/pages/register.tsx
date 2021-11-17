import { Button, FormLabel } from "@mui/material";
import { Box } from "@mui/system";
import { Field, Form, Formik } from "formik";
import React from "react";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import { register } from "../utils/registerRequest";

interface registerProps {}

interface Values {
  username: string;
  password: string;
}

const Register: React.FC<registerProps> = ({}) => {
  return (
    <Wrapper>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(values) => {
          register(values);
        }}
      >
        {({ values }) => (
          <Form>
            <Box>
              <FormLabel>Username</FormLabel>
              <br />
              <Field name="username" component={InputField} />
            </Box>
            <Box mt={2} mb={2}>
              <FormLabel>Password</FormLabel>
              <br />
              <Field name="password" type="password" component={InputField} />
            </Box>

            <Button
              variant="contained"
              color="primary"
              //disabled={isSubmitting}
              type="submit"
            >
              Create account
            </Button>

            <Box mt={2}>{JSON.stringify(values, null, 2)}</Box>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
