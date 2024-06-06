import {
  HStack,
  Heading,
  PinInput,
  PinInputField,
  Stack,
} from "@chakra-ui/react";

const OTP = () => {
  console.log("OTP");
  //  fontSize={24} w={16} h={16}
  return (
    <Stack gap={4}>
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
