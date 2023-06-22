import { Boxes } from "../../common/Boxes";

import dott from "../../../assets/images/dott.png";
import image2 from "../../../assets/images/image2.png";
import { Box, Typography } from "@mui/material";

export const About = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#E5E5E5",
        display: "flex",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "55%",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            marginTop: "80px",
            marginLeft: "-380px",
          }}
        >
          <img src={dott} style={{ width: "160px" }}></img>
        </Box>
        <img
          src={image2}
          style={{
            width: "380px",
            height: "540px",
            marginRight: "3rem",
            marginTop: "150px",
            zIndex: "1",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "felx",
          justifyContent: "center",
          position: "relative",
          top: "160px",
          left: "100px",
        }}
      >
        <Typography
          style={{ fontWeight: "700", lineHeight: "59px" }}
          variant="h4"
          component={"h4"}
        >
          Our Yoga Classess
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ padding: "0" }}>
            <Box sx={{ marginTop: "40px" }}>
              <Boxes box={"Yoga Master"} />
            </Box>
            <Box sx={{ marginTop: "50px" }}>
              <Boxes
                box={"Relive your life"}
                style={{ backgroundColor: "#E5E5E5", color: "#2E4CFF" }}
              />
            </Box>
          </Box>
          <Box sx={{ padding: "60px 30px" }}>
            <Box sx={{ marginTop: "50px" }}>
              <Boxes
                box={"Rock and Yoga"}
                style={{ backgroundColor: "#E5E5E5", color: "#2E4CFF" }}
              />
            </Box>
            <Box sx={{ marginTop: "50px" }}>
              <Boxes box={"Fit to health"} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
