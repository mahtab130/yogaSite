import { Box, SvgIcon, Typography } from "@mui/material";
import image from "../../assets/images/yogaposition.png";

import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: " 390px",
        backgroundColor: "#2E4CFF",
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        color: "white",
      }}
    >
      <Box sx={{ display: "flex", width: "20%", justifyContent: "center" }}>
        <img src={image} style={{ width: "100px", height: "100px" }} />
      </Box>
      <Box
        sx={{
          width: "50%",
          alignItems: "center",
          flexDirection: "column-reverse",
        }}
      >
        <Typography
          style={{ textAlign: "center", lineHeight: "100px", fontSize: "30px" }} variant="h3" component={"h3"}
        >
          Quick Explplore
        </Typography>
        <ul
          style={{
            display: "flex",
            listStyleType: "none",
            gap: "60px",
            justifyContent: "center",
            fontSize: "20px",
          }}
        >
          <li style={{lineHeight: "100px"}}>Home</li>
          <li style={{lineHeight: "100px"}}>About</li>
          <li style={{lineHeight: "100px"}}>Classes</li>
          <li style={{lineHeight: "100px"}}>Teachers</li>
          <li style={{lineHeight: "100px"}}>Blog</li>
        </ul>
        <Typography style={{ textAlign: "center", lineHeight: "89px" }}>
          Designed by Rostam Sadiqi 2021
        </Typography>
      </Box>
      <Box sx={{ width: "20%" }}>
        <Typography style={{lineHeight: "100px" , textAlign: "center"}} variant="h5" component={"h5"}>Stay Conneted</Typography>
          <Box sx={{display: "flex",justifyContent: "space-evenly"}}>
          <SvgIcon component={TwitterIcon} sx={{color: '#fff'}} />
            <SvgIcon component={YouTubeIcon} sx={{color: '#fff'}}/>
          </Box>
      </Box>
    </Box>
  );
};
