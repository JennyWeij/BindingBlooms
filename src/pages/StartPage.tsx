import { useEffect } from "react";
import Header from "../components/Header";

function StartPage() {
  useEffect(() => {
    document.body.style.background =
      "linear-gradient(to right, #000E19, #192B36)";

    return () => {
      document.body.style.background = "";
    };
  }, []);

  return (
    <>
      <Header />
      <div style={{ width: "100%", height: 400 }}>
        <img
          src="../assets/startsida.jpg"
          alt="Background Image"
          style={{ width: "100%", height: 400, objectFit: "cover" }}
        />
      </div>
    </>
  );
}

export default StartPage;
