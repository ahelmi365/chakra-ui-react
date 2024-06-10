import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  Icon,
  Tooltip,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import profileImage from "../assets/images/ali.jpg";
import ChakraLogo from "./ChakraLogo";
import ProfileAvatar from "./ProfileAvatar";
import RightDrawer from "./RightDrawer";
import LeftDrawer from "./LeftDrawer";
const TopNav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const {
    isOpen: isOpenRightDrawer,
    onOpen: onOpenRightDrawer,
    onClose: onCloseRightDrawer,
  } = useDisclosure();
  const {
    isOpen: isOpenLeftDrawer,
    onOpen: OnOpenLeftDrawer,
    onClose: onCloseLeftDrawer,
  } = useDisclosure();
  return (
    <HStack
      justifyContent={"space-between"}
      gap={"2rem"}
      py={2}
      px={[4, 8]}
      className="top-nav"
      boxShadow={"0px 5px 10px 5px rgba(0, 0, 0, 0.1)"}
      overflow={"auto"}
    >
      <Tooltip hasArrow label="Show/Hide Menu" placement="bottom">
        <Button onClick={OnOpenLeftDrawer} cursor={"pointer"}>
          <HamburgerIcon />
        </Button>
      </Tooltip>

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
          <Box onClick={onOpenRightDrawer} cursor={"pointer"}>
            <ProfileAvatar profileImage={profileImage} size={"sm"} />
          </Box>
        </Tooltip>
      </HStack>
      <RightDrawer isOpen={isOpenRightDrawer} onClose={onCloseRightDrawer} />
      <LeftDrawer isOpen={isOpenLeftDrawer} onClose={onCloseLeftDrawer} />
    </HStack>
  );
};

export default TopNav;
