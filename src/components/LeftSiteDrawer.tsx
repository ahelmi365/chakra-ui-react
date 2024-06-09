import { ArrowLeftIcon, SettingsIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Icon,
  VStack,
} from "@chakra-ui/react";
import ChakraLogo from "./ChakraLogo";
import ProfileNavItem from "./ProfileNavItem";
import { Link } from "react-router-dom";
interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const profileNavItems = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "Issues",
    to: "/",
  },
  {
    text: "Pull Requests",
    to: "/",
  },
];
const LeftSiteDrawer = ({ isOpen, onClose }: Props) => {
  return (
    <Drawer isOpen={isOpen} placement="left" size={"xs"} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">
          <HStack>
            <Link to="/">
              <Icon as={ChakraLogo} />
            </Link>
          </HStack>
        </DrawerHeader>

        <DrawerBody mt={4}>
          <VStack alignItems={"start"} fontSize={"sm"} gap={0}>
            {profileNavItems.map((item) => (
              <Box onClick={onClose} w={"100%"}>
                <ProfileNavItem navItemText={item.text} navigateTo={item.to} />
              </Box>
            ))}
          </VStack>
        </DrawerBody>
        <DrawerFooter
          borderTopWidth="1px"
          flexDirection={"column"}
          alignItems={"start"}
        >
          <Box onClick={onClose} w={"100%"}>
            <ProfileNavItem
              navItemText={"Settings"}
              navigateTo={"/"}
              navItemIcon={SettingsIcon}
            />
          </Box>
          <Box onClick={onClose} w={"100%"}>
            <ProfileNavItem
              navItemText={"Logout"}
              navigateTo={"/"}
              navItemIcon={ArrowLeftIcon}
            />
          </Box>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default LeftSiteDrawer;
