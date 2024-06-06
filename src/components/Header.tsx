import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";

const Header = () => {
  const bgColor = useColorModeValue("purple.500", "purple.400");
  return (
    <Box
      color={"white"}
      bg={bgColor}
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
