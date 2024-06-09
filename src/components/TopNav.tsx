import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  Icon,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import profileImage from "../assets/images/ali.jpg";
import ChakraLogo from "./ChakraLogo";
import ProfileAvatar from "./ProfileAvatar";
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
      <Link to="/">
        <Icon as={ChakraLogo} />
      </Link>

      <HStack gap={4}>
        <Tooltip
          hasArrow
          label={colorMode === "light" ? "Dark Mode" : "Light Mode"}
          placement="bottom"
        >
          <Button aria-label="Change Color Mood" onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Tooltip>

        <Tooltip hasArrow label="Ali Helmi" placement="bottom">
          <Box>
            <ProfileAvatar profileImage={profileImage} size={"sm"} />
          </Box>
        </Tooltip>

        {/* <Link to="/">
          <Button colorScheme="primary" display={["none", "inline-flex"]}>
            Go Home
          </Button>
        </Link> */}
      </HStack>
    </HStack>
  );
};

export default TopNav;
