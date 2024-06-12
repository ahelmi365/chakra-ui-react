import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Progress,
  Stack,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
  useSteps,
} from "@chakra-ui/react";
import { useState } from "react";
import ChakraAlert from "./ChakraAlert";

const steps = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
  { title: "Fourth", description: "Check Out" },
];
const ChakraVStepper = () => {
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  const [progressValue, setProgressValue] = useState(0);
  const [progressColorScheme, setProgressColorScheme] = useState("blue");
  return (
    <Stack gap={4}>
      <Heading size="md">Vertical Stepper</Heading>
      <HStack alignItems={"stretch"}>
        <Stepper index={activeStep} orientation="vertical" height={480} gap="0">
          {steps.map((step, index) => (
            <Step key={index} onClick={() => setActiveStep(index)}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink="0" cursor={"pointer"}>
                <StepTitle>
                  <Text fontWeight={"bold"}>{step.title}</Text>
                </StepTitle>

                <StepDescription>{step.description}</StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>

        <Box w={"80%"} h={"100%"} flex={1}>
          {activeStep === 0 && (
            <Stack>
              <ChakraAlert status="info">Step 1 content</ChakraAlert>
            </Stack>
          )}
          {activeStep === 1 && (
            <Stack>
              <ChakraAlert status="info">Step 2 content</ChakraAlert>
            </Stack>
          )}
          {activeStep === 2 && (
            <Stack>
              <ChakraAlert status="info">Step 3 content</ChakraAlert>
            </Stack>
          )}
          {activeStep === 3 && (
            <Stack>
              <ChakraAlert status="info">Step 4 content</ChakraAlert>
            </Stack>
          )}
          {activeStep === 4 && (
            <Stack>
              <ChakraAlert status="success">Done! 🎉</ChakraAlert>
            </Stack>
          )}
          <Progress
            hasStripe
            size={"sm"}
            rounded={8}
            colorScheme={progressColorScheme}
            value={progressValue}
            mt={2}
          />
        </Box>
      </HStack>
      {/* btns */}
      <Flex gap={4}>
        <Button
          w={32}
          colorScheme="primary"
          variant={"outline"}
          onClick={() => {
            console.log({ activeStep });
            if (activeStep > 0) {
              setActiveStep(activeStep - 1);
              console.log((activeStep - 1) * (100 / steps.length));
              setProgressValue((activeStep - 1) * (100 / steps.length));
            }
          }}
        >
          Back
        </Button>
        <Button
          w={32}
          colorScheme="primary"
          onClick={() => {
            console.log({ activeStep });
            if (activeStep < 4) {
              setActiveStep(activeStep + 1);
              console.log((activeStep + 1) * (100 / steps.length));
              setProgressValue((activeStep + 1) * (100 / steps.length));
            }
          }}
        >
          Next
        </Button>
      </Flex>
    </Stack>
  );
};

export default ChakraVStepper;
