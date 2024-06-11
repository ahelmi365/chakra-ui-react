import { AddIcon, ArrowForwardIcon, EmailIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  Stack,
  StackDivider,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useEffect } from "react";

const Buttons = () => {
  const defaultColors = [
    "Gray",
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Teal",
    "Blue",
    "Cyan",
    "Purple",
    "Pink",
  ];

  const customColors = [
    "Primary",
    "Secondary",
    "Success",
    "Danger",
    "Warning",
    "Info",
  ];

  const buttonVariants = ["Solid", "Outline", "Ghost", "Link"];

  const buttonSizes = ["xs", "sm", "md", "lg"];
  useEffect(() => {
    console.log("buttons");
  }, []);

  return (
    // <Flex direction={"column"} gap={"1rem"}>
    <Stack gap={4}>
      <Heading size="md">Buttons</Heading>

      <Stack divider={<StackDivider />} spacing="4">
        <Box>
          <Heading size="s" mb={"0.5rem"}>
            Buttons with colorScheme (Chakra Default Colors)
          </Heading>
          <Stack justifyContent={"start"} alignItems={"start"}>
            <Wrap spacing={4}>
              {defaultColors.map((color, index) => (
                <WrapItem key={index}>
                  <Button colorScheme={color.toLowerCase()}>{color}</Button>
                </WrapItem>
              ))}
            </Wrap>
          </Stack>
        </Box>
        <Box>
          <Heading size="s" mb={"0.5rem"}>
            Buttons with colorScheme (Cusomt Colors)
          </Heading>
          <Stack justifyContent={"start"} alignItems={"start"}>
            <Wrap spacing={4}>
              {customColors.map((color, index) => (
                <WrapItem key={index}>
                  <Button colorScheme={color.toLowerCase()}>{color}</Button>
                </WrapItem>
              ))}
            </Wrap>
          </Stack>
        </Box>
        <Box>
          <Heading size="s" mb={"0.5rem"}>
            Button Sizes
          </Heading>
          <Flex direction="row" align="center" gap={4} wrap={"wrap"}>
            {buttonSizes.map((size, index) => (
              <Button colorScheme="teal" size={size} key={index}>
                Button ({size})
              </Button>
            ))}
          </Flex>
        </Box>
        <Box as="section">
          <Heading size="s" mb={"0.5rem"}>
            Button Variant
          </Heading>
          <Flex direction="row" gap={4} align="center" wrap={"wrap"}>
            {buttonVariants.map((variant, index) => (
              <Button
                colorScheme="red"
                variant={variant.toLowerCase()}
                key={index}
              >
                {variant}
              </Button>
            ))}
          </Flex>
        </Box>
        <Box as="section">
          <Heading size="s" mb={"0.5rem"}>
            Button with icon
          </Heading>

          <Flex direction="row" gap={4} wrap={"wrap"}>
            <Button leftIcon={<EmailIcon />} colorScheme="teal" variant="solid">
              Email
            </Button>
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="teal"
              variant="outline"
            >
              Call us
            </Button>
            <ButtonGroup isAttached variant="outline">
              <Button>Save</Button>
              <IconButton aria-label="Add to friends" icon={<AddIcon />} />
            </ButtonGroup>
          </Flex>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Buttons;
