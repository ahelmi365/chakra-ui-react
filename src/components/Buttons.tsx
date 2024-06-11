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
            Buttons with colorScheme (Cusomt Colors)
          </Heading>
          <Stack justifyContent={"start"} alignItems={"start"}>
            <Wrap spacing={4}>
              <WrapItem>
                <Button colorScheme="primary">Primary</Button>
              </WrapItem>
              <WrapItem>
                <Button colorScheme="secondary">Secondary</Button>
              </WrapItem>
              <WrapItem>
                <Button colorScheme="success">Success</Button>
              </WrapItem>
              <WrapItem>
                <Button colorScheme="danger">Danger</Button>
              </WrapItem>

              <WrapItem>
                <Button colorScheme="warning">Warning</Button>
              </WrapItem>

              <WrapItem>
                <Button colorScheme="info">Info</Button>
              </WrapItem>
            </Wrap>
          </Stack>
        </Box>
        <Box>
          <Heading size="s" mb={"0.5rem"}>
            Button Sizes
          </Heading>
          <Flex direction="row" align="center" gap={4} wrap={"wrap"}>
            <Button colorScheme="teal" size="xs">
              Button (xs)
            </Button>
            <Button colorScheme="teal" size="sm">
              Button (sm)
            </Button>
            <Button colorScheme="teal" size="md">
              Button (md)
            </Button>
            <Button colorScheme="teal" size="lg">
              Button (lg)
            </Button>
          </Flex>
        </Box>
        <Box as="section">
          <Heading size="s" mb={"0.5rem"}>
            Button Variant
          </Heading>
          <Flex direction="row" gap={4} align="center" wrap={"wrap"}>
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
