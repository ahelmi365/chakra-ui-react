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
import { stepperContentData, stepperSteps } from "../utils/constants";

const ChakraHStepper = () => {
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: stepperSteps.length,
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
        {stepperSteps.map((step, index) => (
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
            status={activeStep === stepperSteps.length ? "success" : "info"}
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
            isDisabled={activeStep === 0}
            w={32}
            colorScheme="primary"
            variant={"outline"}
            onClick={() => {
              setProgressColorScheme("blue");
              console.log({ activeStep });
              if (activeStep > 0) {
                setActiveStep(activeStep - 1);
                console.log((activeStep - 1) * (100 / stepperSteps.length));
                setProgressValue(
                  (activeStep - 1) * (100 / stepperSteps.length)
                );
              }
            }}
          >
            Back
          </Button>
          <Button
            isDisabled={activeStep === stepperSteps.length}
            w={32}
            colorScheme="primary"
            onClick={() => {
              console.log({ activeStep });
              if (activeStep < stepperSteps.length) {
                setActiveStep(activeStep + 1);
                const newProgressValue =
                  (activeStep + 1) * (100 / stepperSteps.length);
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