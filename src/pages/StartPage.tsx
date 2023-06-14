import { Box } from "@mui/material";
import { useEffect } from "react";

function StartPage() {
  useEffect(() => {
    document.body.style.background =
      "linear-gradient(to right, #000E19, #192B36)";

    return () => {
      document.body.style.background = "";
    };
  }, []);

  return <Box>Testar</Box>;
}

export default StartPage;
