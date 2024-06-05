import { AddIcon, ArrowForwardIcon, EmailIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  IconButton,
  Stack,
  StackDivider,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

const Buttons = () => {
  console.log("buttons");
  return (
    // <Flex direction={"column"} gap={"1rem"}>
    <Stack spacing={4}>
      <Heading size="md"> Chakra-UI Buttons</Heading>

      <Stack divider={<StackDivider />} spacing="4">
        <Box>
          <Heading size="s" mb={"0.5rem"}>
            Buttons with colorScheme
          </Heading>
          <Stack justifyContent={"start"} alignItems={"start"}>
            <Wrap spacing={4}>
              <WrapItem>
                <Button colorScheme="primary">Primary</Button>
              </WrapItem>
              <WrapItem>
                <Button colorScheme="gray">Gray</Button>
              </WrapItem>
              <WrapItem>
                <Button colorScheme="red">Red</Button>
              </WrapItem>
              <WrapItem>
                <Button colorScheme="orange">Orange</Button>
              </WrapItem>
              <WrapItem>
                <Button colorScheme="yellow">Yellow</Button>
              </WrapItem>
              <WrapItem>
                <Button colorScheme="green">Green</Button>
              </WrapItem>
              <WrapItem>
                <Button colorScheme="teal">Teal</Button>
              </WrapItem>
              <WrapItem>
                <Button colorScheme="blue">Blue</Button>
              </WrapItem>
              <WrapItem>
                <Button colorScheme="cyan">Cyan</Button>
              </WrapItem>
              <WrapItem>
                <Button colorScheme="purple">Purple</Button>
              </WrapItem>
              <WrapItem>
                <Button colorScheme="pink">Pink</Button>
              </WrapItem>
            </Wrap>
          </Stack>
        </Box>
        <Box>
          <Heading size="s" mb={"0.5rem"}>
            Button Sizes
          </Heading>
          <Stack spacing={4} direction="row" align="center">
            <Button colorScheme="teal" size="xs">
              Button
            </Button>
            <Button colorScheme="teal" size="sm">
              Button
            </Button>
            <Button colorScheme="teal" size="md">
              Button
            </Button>
            <Button colorScheme="teal" size="lg">
              Button
            </Button>
          </Stack>
        </Box>
        <Box as="section">
          <Heading size="s" mb={"0.5rem"}>
            Button Variant
          </Heading>
          <Stack direction="row" spacing={4} align="center">
            <Button colorScheme="red" variant="solid">
              Solid
            </Button>
            <Button colorScheme="red" variant="outline">
              Outline
            </Button>
            <Button colorScheme="red" variant="ghost">
              Ghost
            </Button>
            <Button colorScheme="red" variant="link">
              Link
            </Button>
          </Stack>
        </Box>
        <Box as="section">
          <Heading size="s" mb={"0.5rem"}>
            Button with icon
          </Heading>

          <Stack direction="row" spacing={4}>
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
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Buttons;
