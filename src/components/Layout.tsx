import { Box, Stack, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import TopNav from "./TopNav";
interface props {
  children: ReactNode;
}
const Layout = ({ children }: props) => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  return (
    <Stack className="Layout-container">
      <Box
        justifyContent={"center"}
        className="top-nav-container"
        position={"sticky"}
        top={0}
        left={0}
        zIndex={1}
        bg={bgColor}
      >
        <TopNav />
      </Box>

      <Box className="main-container" m={4}>
        {children}
      </Box>
    </Stack>
  );
};

export default Layout;
