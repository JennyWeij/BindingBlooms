import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <Box height="0">
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
}

export default App;
