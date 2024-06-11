import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";

const Header = () => {
  const bgColor = useColorModeValue("primary.500", "primary.400");
  const textColor = useColorModeValue("gray.50", "gray.700");
  return (
    <Box
      color={"white"}
      bg={bgColor}
      pt="10"
      pb="48"
      px="8"
      textAlign={["left", "left", "center"]}
      as="section"
    >
      <Heading
        fontWeight={"extrabold"}
        fontSize={["3xl", "3xl", "5xl"]}
        color={textColor}
      >
        Chakra UI
      </Heading>
      <Text
        fontWeight="medium"
        fontSize={["lg", "lg", "2xl"]}
        pt="4"
        color={textColor}
      >
        Build Accessible React Apps with Speed ⚡️
      </Text>
    </Box>
  );
};

export default Header;
