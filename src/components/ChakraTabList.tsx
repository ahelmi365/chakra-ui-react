import {
  Card,
  CardBody,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

import Buttons from "./Buttons";
import ChakraAccordion from "./ChakraAccordion";
import ChakraBreadcrumb from "./ChakraBreadcrumb";
import ChakraDrawer from "./ChakraDrawer";
import ChakraForm from "./ChakraForm";
import ChakraHStepper from "./ChakraHStepper";
import ChakraModal from "./ChakraModal";
import ChakraSkeleton from "./ChakraSkeleton";
import ChakraTooltip from "./ChakraTooltip";
import ChakraVStepper from "./ChakraVStepper";
import ResponsiveStyle from "./ResponsiveStyle";
import Stacks from "./Stacks";
import ChakraToast from "./Toast";

const tabsData = [
  {
    label: "Buttons",
    content: <Buttons />,
    isDisabled: false,
  },
  {
    label: "Forms",
    content: <ChakraForm />,
    isDisabled: false,
  },

  {
    label: "Toast",
    content: <ChakraToast />,
    isDisabled: false,
  },
  {
    label: "Tooltip",
    content: <ChakraTooltip />,
    isDisabled: false,
  },
  {
    label: "H-Stepper",
    content: <ChakraHStepper />,
    isDisabled: false,
  },
  {
    label: "V-Stepper",
    content: <ChakraVStepper />,
    isDisabled: false,
  },
  {
    label: "Modals",
    content: <ChakraModal />,
    isDisabled: false,
  },
  {
    label: "Drawer",
    content: <ChakraDrawer />,
    isDisabled: false,
  },
  {
    label: "Breadcrumb",
    content: <ChakraBreadcrumb />,
    isDisabled: false,
  },
  {
    label: "Skeleton",
    content: <ChakraSkeleton />,
    isDisabled: false,
  },
  {
    label: "Accordion",
    content: <ChakraAccordion />,
    isDisabled: false,
  },
  {
    label: "Grid",
    content: <Stacks />,
    isDisabled: true,
  },
  {
    label: "Stacks",
    content: <Stacks />,
    isDisabled: true,
  },
  {
    label: "Resposive",
    content: <ResponsiveStyle />,
    isDisabled: true,
  },
];
const ChakraTabList = () => {
  return (
    <Card boxShadow={"0px 20px 25px -5px rgba(0, 0, 0, 0.1)"}>
      {/* <CardHeader>Components</CardHeader> */}
      <CardBody>
        <Tabs variant="enclosed" isLazy maxWidth="100%">
          <TabList overflowX={["auto", "auto"]} overflowY={["hidden"]}>
            {tabsData
              .filter((tab) => !tab.isDisabled)
              .map((tab, index) => (
                <Tab
                  key={index}
                  isDisabled={tab.isDisabled}
                  fontWeight={"bold"}
                >
                  {tab.label}
                </Tab>
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
