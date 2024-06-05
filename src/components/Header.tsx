import { Box, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      color={"white"}
      bg="purple.600"
      pt="20"
      pb="48"
      px="8"
      textAlign={["left", "left", "center"]}
      as="section"
    >
      <Heading fontWeight={"extrabold"} fontSize={["3xl", "3xl", "5xl"]}>
        Chakra UI Adoption Guide
      </Heading>
      <Text fontWeight="medium" fontSize={["lg", "lg", "2xl"]} pt="4">
        Overview, examples, and alternatives{" "}
      </Text>
    </Box>
  );
};

export default Header;
