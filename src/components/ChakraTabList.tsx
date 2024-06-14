import { lazy, Suspense } from "react";
import {
  Card,
  CardBody,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

const Buttons = lazy(() => import("./Buttons"));
const ChakraAccordion = lazy(() => import("./ChakraAccordion"));
const ChakraBreadcrumb = lazy(() => import("./ChakraBreadcrumb"));
const ChakraDrawer = lazy(() => import("./ChakraDrawer"));
const ChakraForm = lazy(() => import("./ChakraForm"));
const ChakraHStepper = lazy(() => import("./ChakraHStepper"));
const ChakraModal = lazy(() => import("./ChakraModal"));
const ChakraSkeleton = lazy(() => import("./ChakraSkeleton"));
const ChakraTooltip = lazy(() => import("./ChakraTooltip"));
const ChakraVStepper = lazy(() => import("./ChakraVStepper"));
const ResponsiveStyle = lazy(() => import("./ResponsiveStyle"));
const Stacks = lazy(() => import("./Stacks"));
const ChakraToast = lazy(() => import("./Toast"));
const ChakraTable = lazy(() => import("./ChakraTable"));

const tabsData = [
  {
    label: "Buttons",
    content: (
      <>
        <Suspense>
          <Buttons />
        </Suspense>
      </>
    ),
    isDisabled: false,
  },
  {
    label: "Forms",
    content: (
      <>
        <Suspense>
          <ChakraForm />
        </Suspense>
      </>
    ),
    isDisabled: false,
  },

  {
    label: "Toast",
    content: (
      <>
        <Suspense>
          <ChakraToast />
        </Suspense>
      </>
    ),
    isDisabled: false,
  },
  {
    label: "Tooltip",
    content: (
      <>
        <Suspense>
          <ChakraTooltip />
        </Suspense>
      </>
    ),
    isDisabled: false,
  },
  {
    label: "H-Stepper",
    content: (
      <>
        <Suspense>
          <ChakraHStepper />
        </Suspense>
      </>
    ),
    isDisabled: false,
  },
  {
    label: "V-Stepper",
    content: <ChakraVStepper />,
    isDisabled: false,
  },
  {
    label: "Modals",
    content: (
      <>
        <Suspense>
          <ChakraModal />
        </Suspense>
      </>
    ),
    isDisabled: false,
  },
  {
    label: "Drawer",
    content: (
      <>
        <Suspense>
          <ChakraDrawer />
        </Suspense>
      </>
    ),
    isDisabled: false,
  },
  {
    label: "Breadcrumb",
    content: (
      <>
        <Suspense>
          <ChakraBreadcrumb />
        </Suspense>
      </>
    ),
    isDisabled: false,
  },
  {
    label: "Skeleton",
    content: (
      <>
        <Suspense>
          <ChakraSkeleton />
        </Suspense>
      </>
    ),
    isDisabled: false,
  },
  {
    label: "Accordion",
    content: (
      <>
        <Suspense>
          <ChakraAccordion />
        </Suspense>
      </>
    ),
    isDisabled: false,
  },
  {
    label: "Table",
    content: (
      <>
        <Suspense>
          <ChakraTable />
        </Suspense>
      </>
    ),
    isDisabled: false,
  },
  {
    label: "Grid",
    content: (
      <>
        <Suspense>
          <Stacks />
        </Suspense>
      </>
    ),
    isDisabled: true,
  },
  {
    label: "Stacks",
    content: (
      <>
        <Suspense>
          <Stacks />
        </Suspense>
      </>
    ),
    isDisabled: true,
  },
  {
    label: "Resposive",
    content: (
      <>
        <Suspense>
          <ResponsiveStyle />
        </Suspense>
      </>
    ),
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
