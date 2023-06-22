import { Header } from "../../common/Header";
import { Buttons } from "../../controllers/Buttons";

import image1 from "../../../assets/images/image1.png";
import dots from "../../../assets/images/dots.png";
import { Box, Typography } from "@mui/material";

export const Home = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#2E4CFF",
        fontFamily: "Roboto",
      }}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "white",
          margin: "4rem 7rem",
        }}
      >
        <Typography
          sx={{
            fontWeight: 'bold',
            lineHeight: "70px",
          }}variant="h3" component="h3"
        >
          Yoga teaches you how
          <br /> to listen to your body{" "}
        </Typography>

        <Typography style={{ fontWeight: "400", fontSize: "20px", lineHeight: "43px" }}>
          Slow movements and deep breathing increase blood
          <br /> flow and warm up muscles, while holding a pose can
          <br /> build strength.
        </Typography>
        <Box style={{ display: "flex", marginLeft: "-2rem" }}>
          <Buttons
            buttonName="Get Started"
            style={{
              marginLeft: "30px",
              position: "relative",
              top: "40px",
              backgroundColor: "#fff"
            }}
            variant="contained"
          />
          {
            <Buttons
              buttonName="Sign In"
              style={{
                backgroundColor: "#2E4CFF",
                color: "white",
                marginLeft: "2rem",
                position: "relative",
                top: "40px",
                "&:hover": {
                  backgroundColor: "white", color: "#2E4CFF"
                },
              }} 
            variant="outlined"
            />
          }
        </Box>
      </Box>

      <Box
        sx={{
          position: "relative",
          marginRight: "5rem",
          display: "flex",
          flexDirection: "column",
          margin: "-26rem 7rem",
        }}
      >
        <img
          src={image1}
          style={{
            width: "400px",
            height: "450px",
            marginRight: "40px",
            marginTop: "10px",
            position: "absolute",
            right: "0",
            zIndex: "1",
          }}
        />
        <Box
          style={{
            marginTop: "-40px",
          }}
        >
          <img
            src={dots}
            style={{
              width: "200px",
              height: "200px",
              position: "absolute",
              right: "0",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
