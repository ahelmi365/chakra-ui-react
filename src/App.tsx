import { Box } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";
import Pricing from "./components/Pricing";

import { Route, Routes } from "react-router-dom";
import ChakraTabList from "./components/ChakraTabList";

function App() {
  return (
    <Box className="app" px={"2rem"}>
      <Routes>
        <Route
          path="/"
          element={
            <Box>
              <Header />
              <Pricing />
            </Box>
          }
        />

        <Route path="/list" element={<ChakraTabList />} />
      </Routes>
    </Box>
  );
}

export default App;
