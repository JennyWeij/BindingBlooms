import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <Box height="0">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </Box>
  );
}

export default App;
