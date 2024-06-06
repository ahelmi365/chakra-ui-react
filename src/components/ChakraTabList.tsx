import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Icon,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorMode,
} from "@chakra-ui/react";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import ChakraForm from "./ChakraForm";
import ChakraHStepper from "./ChakraHStepper";
import ChakraLogo from "./ChakraLogo";
import ChakraModal from "./ChakraModal";
import ChakraTooltip from "./ChakraTooltip";
import ChakraVStepper from "./ChakraVStepper";
import OTP from "./OTP";
import ResponsiveStyle from "./ResponsiveStyle";
import Stacks from "./Stacks";
import ChakraToast from "./Toast";
import ChakraBreadcrumb from "./ChakraBreadcrumb";
import ChakraAccordion from "./ChakraAccordion";
import ChakraDrawer from "./ChakraDrawer";

const tabsData = [
  {
    label: "Buttons",
    content: <Buttons />,
  },
  {
    label: "Forms",
    content: <ChakraForm />,
  },
  {
    label: "OTP",
    content: <OTP />,
  },
  {
    label: "Toast",
    content: <ChakraToast />,
  },
  {
    label: "Modals",
    content: <ChakraModal />,
  },
  {
    label: "Drawer",
    content: <ChakraDrawer />,
  },
  {
    label: "Tooltip",
    content: <ChakraTooltip />,
  },
  {
    label: "Stepper",
    content: (
      <Stack gap={8}>
        <Box>
          <ChakraHStepper />
        </Box>
        <Box alignSelf={"center"}>
          <ChakraVStepper />
        </Box>
      </Stack>
    ),
  },
  {
    label: "Breadcrumb",
    content: <ChakraBreadcrumb />,
  },
  {
    label: "Accordion",
    content: <ChakraAccordion />,
  },
  {
    label: "Stacks",
    content: <Stacks />,
  },
  {
    label: "Resposive Style",
    content: <ResponsiveStyle />,
  },
];
const ChakraTabList = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Card mt="1rem">
      <CardHeader>
        <HStack justifyContent={"space-between"} gap={"2rem"}>
          <Icon as={ChakraLogo} />

          <Heading size="md">Some Chakra-UI Components</Heading>
          <HStack>
            <Button aria-label="Add to friends" onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

            <Link to="/">
              <Button colorScheme="primary">Go Home</Button>
            </Link>
          </HStack>
        </HStack>
      </CardHeader>
      <CardBody>
        <Tabs variant="enclosed" isLazy maxWidth="100%">
          <TabList
          // overflowX={["scroll", "scroll", "hidden"]}
          // overflowY={["hidden"]}
          >
            {tabsData.map((tab, index) => (
              <Tab key={index}>{tab.label}</Tab>
            ))}
          </TabList>

          <TabPanels>
            {tabsData.map((tab, index) => (
              <TabPanel key={index}>{tab.content}</TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </CardBody>
    </Card>
  );
};

export default ChakraTabList;
