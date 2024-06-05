import { CheckIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  Stack,
  StackDivider,
  VStack,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";

const ChakraForm = () => {
  console.log("Form");
  return (
    <Stack spacing={4}>
      <Heading size="md">Chakra-UI Forms</Heading>

      <Stack
        direction={["column", "column", "row"]}
        gap={"2rem"}
        divider={<StackDivider />}
      >
        <Box flex={1}>
          <Heading fontSize={"large"} mb={"1rem"}>
            Basic Inputs
          </Heading>
          <Stack spacing={3}>
            <Input placeholder="Add Text" />

            <InputGroup>
              <InputLeftAddon>+02</InputLeftAddon>
              <Input type="tel" placeholder="phone number" />
            </InputGroup>

            {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
            <InputGroup size="sm">
              <InputLeftAddon>https://</InputLeftAddon>
              <Input placeholder="mysite" />
              <InputRightAddon>.com</InputRightAddon>
            </InputGroup>

            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <PhoneIcon color="gray.300" />
              </InputLeftElement>
              <Input type="tel" placeholder="Phone number" />
            </InputGroup>

            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
              >
                $
              </InputLeftElement>
              <Input placeholder="Enter amount" />
              <InputRightElement>
                <CheckIcon color="green.500" />
              </InputRightElement>
            </InputGroup>
          </Stack>
        </Box>

        <Box flex={1}>
          <Heading fontSize={"large"} mb={"1rem"}>
            Integration with Formik
          </Heading>
          <Box rounded="md">
            <Formik
              initialValues={{
                email: "",
                password: "",
                rememberMe: false,
              }}
              onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2));
              }}
            >
              {({ handleSubmit, errors, touched }) => (
                <form onSubmit={handleSubmit}>
                  <VStack spacing={4} align="flex-start">
                    <FormControl>
                      <FormLabel htmlFor="email">Email Address</FormLabel>
                      <Field
                        as={Input}
                        id="email"
                        name="email"
                        type="email"
                        variant="filled"
                      />
                    </FormControl>
                    <FormControl
                      isInvalid={!!errors.password && touched.password}
                    >
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Field
                        as={Input}
                        id="password"
                        name="password"
                        type="password"
                        variant="filled"
                        validate={(value: string) => {
                          let error;

                          if (value.length < 6) {
                            error =
                              "Password must contain at least 6 characters";
                          } else if (value.length > 10) {
                            error =
                              "Password must contain at most 10 characters";
                          }

                          return error;
                        }}
                      />
                      <FormErrorMessage>{errors.password}</FormErrorMessage>
                    </FormControl>
                    <Field
                      as={Checkbox}
                      id="rememberMe"
                      name="rememberMe"
                      colorScheme="primary"
                    >
                      Remember me?
                    </Field>
                    <Button type="submit" colorScheme="primary" width="full">
                      Login
                    </Button>
                  </VStack>
                </form>
              )}
            </Formik>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default ChakraForm;
