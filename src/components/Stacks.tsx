import {
  Box,
  Stack,
  HStack,
  VStack,
  Heading,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";

const Stacks = () => {
  useEffect(() => {
    console.log("Stacks");
  }, []);
  return (
    <>
      <Box as="section" mt={5} mb={5}>
        <Heading fontSize={"1.25rem"} mb="0.5rem">
          Stack, VStack, HStack
        </Heading>
        <Text>HStack</Text>
        <HStack spacing="24px" divider={<StackDivider />}>
          {/* div >> disply:flex; flex-direction:row; align-items:center; gap:24px */}
          <Box w="40px" h="40px" bg="yellow.200">
            1
          </Box>
          <Box w="40px" h="40px" bg="tomato">
            2
          </Box>
          <Box w="40px" h="40px" bg="pink.100">
            3
          </Box>
        </HStack>
      </Box>
      <Box as="section" mt={5} mb={5}>
        <Text>VStack</Text>
        <VStack spacing="24px" divider={<StackDivider />}>
          {/* div >> disply:flex; flex-direction:Column; align-items:center; gap:24px */}
          <Box w="40px" h="40px" bg="yellow.200">
            1
          </Box>
          <Box w="40px" h="40px" bg="tomato">
            2
          </Box>
          <Box w="40px" h="40px" bg="pink.100">
            3
          </Box>
        </VStack>
      </Box>
      <Box as="section" mt={5} mb={5}>
        <Text>Stack</Text>
        <Stack
          spacing="24px"
          direction={["column", "row"]}
          divider={<StackDivider />}
        >
          {/* div >> disply:flex; flex-direction:Column; align-items:center; gap:24px */}
          <Box w="40px" h="40px" bg="yellow.200">
            1
          </Box>
          <Box w="40px" h="40px" bg="tomato">
            2
          </Box>
          <Box w="40px" h="40px" bg="pink.100">
            3
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Stacks;
