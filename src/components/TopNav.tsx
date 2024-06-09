import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, HStack, Heading, Icon, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ChakraLogo from "./ChakraLogo";

const TopNav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack
      justifyContent={"space-between"}
      gap={"2rem"}
      p={2}
      className="top-nav"
      boxShadow={"0px 5px 10px 5px rgba(0, 0, 0, 0.1)"}
    >
      <Icon as={ChakraLogo} />

      <Heading size="md">Chakra-UI Components</Heading>
      <HStack>
        <Button aria-label="Add to friends" onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>

        <Link to="/">
          <Button colorScheme="primary">Go Home</Button>
        </Link>
      </HStack>
    </HStack>
  );
};

export default TopNav;
