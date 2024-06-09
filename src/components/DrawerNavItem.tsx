import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Flex, useColorModeValue, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
interface Props {
  navItemIcon?: typeof Icon;
  navItemText: string;
  navigateTo: string;
}
const DrawerNavItem = ({ navItemIcon, navItemText, navigateTo }: Props) => {
  const bgColor = useColorModeValue("blackAlpha.300", "blackAlpha.500");
  return (
    <Flex
      as={Link}
      to={navigateTo}
      _hover={{
        bg: bgColor,
      }}
      w={"100%"}
      p={2}
      borderRadius={"md"}
      cursor={"pointer"}
      gap={4}
      alignItems={"center"}
    >
      {navItemIcon ? <Icon as={navItemIcon} /> : <ArrowRightIcon />}
      <Box>{navItemText}</Box>
    </Flex>
  );
};

export default DrawerNavItem;
