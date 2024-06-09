import { Box } from "@chakra-ui/react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ChakraTabList from "./components/ChakraTabList";
import Landing from "./components/Landing";

function App() {
  return (
    <Box className="app">
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/list" element={<ChakraTabList />} />
        </Routes>
      </Layout>
    </Box>
  );
}

export default App;
