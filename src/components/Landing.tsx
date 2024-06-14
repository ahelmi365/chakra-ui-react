import { Suspense, lazy } from "react";
import { Box } from "@chakra-ui/react";
const Header = lazy(() => import("./Header"));
const Pricing = lazy(() => import("./Pricing"));

const Landing = () => {
  return (
    <Box>
      <Suspense>
        <Header />
      </Suspense>
      <Suspense>
        <Pricing />
      </Suspense>
    </Box>
  );
};

export default Landing;
