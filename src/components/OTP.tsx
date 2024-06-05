import {
  HStack,
  Heading,
  PinInput,
  PinInputField,
  Stack,
} from "@chakra-ui/react";

const OTP = () => {
  console.log("OTP");
  return (
    <Stack spacing={4}>
      <Heading size="md">Chakra-UI OTP</Heading>

      <HStack>
        <PinInput size="lg" placeholder="-">
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
    </Stack>
  );
};

export default OTP;
