import {
  Button,
  HStack,
  Heading,
  PinInput,
  PinInputField,
  Stack,
} from "@chakra-ui/react";
import { FormEvent, useEffect, useState } from "react";

const OTP = () => {
  const [OTP, setOTP] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(OTP);
    setOTP("");
  };
  useEffect(() => {
    console.log("OTP");
  }, []);
  const pinSize = 16;
  const pinFontSize = 24;
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <Stack gap={4}>
        <Heading fontSize={"large"}>OTP</Heading>
        <HStack>
          <PinInput
            size="lg"
            placeholder="-"
            onChange={(value) => setOTP(value)}
            value={OTP}
          >
            {[...Array(4)].map((_, index) => (
              <PinInputField
                key={index}
                w={pinSize}
                h={pinSize}
                fontSize={pinFontSize}
              />
            ))}
          </PinInput>
        </HStack>
        <Button
          colorScheme="primary"
          w={32}
          type="submit"
          isDisabled={OTP.length < 4}
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default OTP;
