import React, { useRef } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import {
  Container,
  SocialLogin,
  Button,
  Text,
  Box,
  TextInput,
  CheckBox,
} from "../../components";
import { Routes, StackNavigationProps } from "../../components/Navigation";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Login = ({ navigation }: StackNavigationProps<Routes, "Login">) => {
  const password = useRef<typeof TextInput>(null);

  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button
          variant="transparent"
          onPress={() => navigation.navigate("SignUp")}
        >
          <Box flexDirection="row" justifyContent="center" flex={1}>
            <Text marginTop="s" color="white">
              Don't have an account?{" "}
            </Text>
            <Text marginTop="s" marginLeft="s" color="welcomeGrey">
              Sign up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );

  return (
    <Container {...{ footer }}>
      <Box padding="xl">
        <Text variant="title" textAlign="center" marginBottom="l">
          Welcome Back
        </Text>
        <Text variant="body" textAlign="center">
          Use your credentials below to login to your account
        </Text>
        <Formik
          initialValues={{ email: "", password: "", remember: false }}
          onSubmit={(values) => console.log(values)}
          validationSchema={LoginSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <Box>
              <Box marginBottom="m">
                <TextInput
                  icon="icon-mail"
                  placeholder="Enter your email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  error={errors.email}
                  touched={touched.email}
                  autoCompleteType="email"
                  autoCapitalize="none"
                  returnKeyType="next"
                  returnKeyLabel="next"
                  onSubmitEditing={() => password.current?.focus()}
                />
                <TextInput
                  ref={password}
                  icon="icon-lock"
                  placeholder="Enter your password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  error={errors.password}
                  touched={touched.password}
                  autoCompleteType="password"
                  autoCapitalize="none"
                  returnKeyType="go"
                  returnKeyLabel="go"
                  secureTextEntry
                  onSubmitEditing={handleSubmit}
                />
              </Box>
              <Box flexDirection="row" justifyContent="space-between">
                <CheckBox
                  label="Remember me"
                  checked={values.remember}
                  onChange={() => setFieldValue("remember", !values.remember)}
                />
                <Button variant="transparent" onPress={() => true}>
                  <Text color="tiftGreen">Forgot password?</Text>
                </Button>
              </Box>
              <Box alignItems="center" marginTop="l">
                <Button
                  variant="primary"
                  onPress={handleSubmit}
                  label="Log into your account"
                />
              </Box>
            </Box>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Login;
