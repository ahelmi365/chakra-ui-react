import { Box } from "@chakra-ui/react";

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

import { Suspense, lazy } from "react";

const Landing = lazy(() => import("./components/Landing"));
const ChakraTabList = lazy(() => import("./components/ChakraTabList"));

function App() {
  return (
    <Box className="app">
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense>
                <Landing />
              </Suspense>
            }
          />
          <Route
            path="/list"
            element={
              <Suspense>
                <ChakraTabList />
              </Suspense>
            }
          />
        </Routes>
      </Layout>
    </Box>
  );
}

export default App;
