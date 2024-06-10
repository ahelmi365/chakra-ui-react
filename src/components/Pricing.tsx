import {
  Box,
  Button,
  Flex,
  Heading,
  LightMode,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CheckedItem from "./CheckedItem";

const checkedItemText = [
  "Ease of use",
  "Learning Curve",
  "Small Bundle Size",
  "Community & ecosystem",
  "Speed up and simplify UI development",
];

const Pricing = () => {
  const textColor = useColorModeValue("gray.900", "gray.700");
  const bgColor = useColorModeValue("purple.500", "purple.400");

  return (
    <LightMode>
      <Box mx={"6"}>
        <Box
          maxW={"994px"}
          margin={"auto"}
          borderRadius={"12px"}
          overflow={"hidden"}
          marginTop={"-155px"}
          bg={"white"}
          boxShadow={"0px 20px 25px -5px rgba(0, 0, 0, 0.1)"}
        >
          <Flex direction={["column", "column", "row"]}>
            <Box
              className="left"
              bg={"purple.50"}
              px={["4", "32"]}
              py={["4", "16"]}
              textAlign={"center"}
            >
              <Text fontSize={"24px"} fontWeight={"800"} color={textColor}>
                All Chakra UI Features
              </Text>
              <Heading
                as="h4"
                fontSize={["4xl", "4xl", "5xl"]}
                mt="16px"
                fontFamily={"digits"}
                color={textColor}
              >
                $ 0.0
              </Heading>
              <Text
                fontSize={"xl"}
                fontWeight={"extrabold"}
                mt="8px"
                color={textColor}
              >
                All Free To Use
              </Text>
              <Link to="/list">
                <Button
                  colorScheme={"purple"}
                  size={"lg"}
                  w={["80%", "100%"]}
                  mt="24px"
                >
                  Get Started
                </Button>
              </Link>
            </Box>
            <Box
              className="right"
              p={["4", "8"]}
              fontSize={"18px"}
              color={textColor}
            >
              <Text>
                Chakra UI is a comprehensive library of accessible, reusable,
                and composable React components that streamlines the development
                of modern web applications and websites.
              </Text>
              <Box mt={"1em"}>
                {checkedItemText.map((item, index) => (
                  <CheckedItem
                    text={item}
                    key={index}
                    color={bgColor}
                  ></CheckedItem>
                ))}
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </LightMode>
  );
};

export default Pricing;
