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
  Text,
  VStack,
} from "@chakra-ui/react";
import profileImage from "../assets/images/ali.jpg";
import ProfileAvatar from "./ProfileAvatar";
import DrawerNavItem from "./DrawerNavItem";
interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const profileNavItems = [
  {
    text: "Your Profile",
    to: "/",
  },
  {
    text: "Your Components",
    to: "/list",
  },
  {
    text: "Your Styles",
    to: "/",
  },
];
const RightDrawer = ({ isOpen, onClose }: Props) => {
  return (
    <Drawer isOpen={isOpen} placement="right" size={"xs"} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">
          <HStack>
            <ProfileAvatar profileImage={profileImage} size={"md"} />
            <VStack alignItems={"start"} gap={0}>
              <Text>Ali Helmi</Text>
              <Box fontSize={"xs"} fontWeight={"thin"}>
                ahelmi365@gmail.com
              </Box>
            </VStack>
          </HStack>
        </DrawerHeader>

        <DrawerBody mt={4}>
          <VStack alignItems={"start"} fontSize={"sm"} gap={0}>
            {profileNavItems.map((item) => (
              <Box onClick={onClose} w={"100%"}>
                <DrawerNavItem navItemText={item.text} navigateTo={item.to} />
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
            <DrawerNavItem
              navItemText={"Settings"}
              navigateTo={"/"}
              navItemIcon={SettingsIcon}
            />
          </Box>
          <Box onClick={onClose} w={"100%"}>
            <DrawerNavItem
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

export default RightDrawer;
