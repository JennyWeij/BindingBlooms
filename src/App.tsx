import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <Box height="0">
      <Outlet />
      <Footer />
    </Box>
  );
}

export default App;
