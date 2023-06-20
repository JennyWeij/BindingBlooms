import { useEffect } from "react";

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
      {/* <Header /> */}
      <div style={{ width: "100%", height: 700 }}>
        <img
          src="/images/ourcourses.jpg"
          alt="Background Image"
          style={{
            width: "100%",
            height: 700,
            objectFit: "cover",
            marginTop: "110px",
          }}
        />
      </div>
    </>
  );
}

export default StartPage;
