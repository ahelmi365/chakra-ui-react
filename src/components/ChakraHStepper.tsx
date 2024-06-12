import {
  Box,
  Button,
  Flex,
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
import { useEffect, useState } from "react";
import ChakraAlert from "./ChakraAlert";
import { stepperContentData } from "../utils/constants";

const steps = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
  { title: "Fourth", description: "Check Out" },
];
const ChakraHStepper = () => {
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });
  const [progressValue, setProgressValue] = useState(0);
  const [progressColorScheme, setProgressColorScheme] = useState("blue");
  useEffect(() => {
    console.log("Stepper");
  }, []);
  return (
    <Stack gap={8}>
      <Heading size="md">Horizontal Stepper</Heading>
      <Stepper index={activeStep} orientation="horizontal" overflow={"auto"}>
        {steps.map((step, index) => (
          <Step key={index} onClick={() => setActiveStep(index)}>
            <StepIndicator fontWeight={"bold"}>
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

      <Stack spacing={8}>
        <Box>
          <ChakraAlert
            status={activeStep === steps.length ? "success" : "info"}
          >
            <Stack>
              <Heading size={"md"}>
                {stepperContentData[activeStep]?.title}
              </Heading>
              <Text>{stepperContentData[activeStep]?.content}</Text>
            </Stack>
          </ChakraAlert>

          <Progress
            hasStripe={progressValue < 100}
            size={"sm"}
            rounded={8}
            colorScheme={progressColorScheme}
            value={progressValue}
            mt={2}
          />
        </Box>
        {/* btns */}
        <Flex gap={4}>
          <Button
            w={32}
            colorScheme="primary"
            variant={"outline"}
            onClick={() => {
              setProgressColorScheme("blue");
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
              if (activeStep < steps.length) {
                setActiveStep(activeStep + 1);
                const newProgressValue =
                  (activeStep + 1) * (100 / steps.length);
                console.log({ newProgressValue });
                setProgressValue(newProgressValue);
                if (newProgressValue === 100) {
                  setProgressColorScheme("green");
                }
              }
            }}
          >
            Next
          </Button>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default ChakraHStepper;
