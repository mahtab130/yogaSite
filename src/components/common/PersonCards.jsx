import { Avatar, Box, SvgIcon, Typography } from "@mui/material";

import { users } from "../data/data";

import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

export const PersonCards = () => {
  return (
    <Box
      sx={{
        height: "400px",
        width: "80%",
        display: "flex",
        marginTop: "7rem",
        backgroundColor: "#E5E5E5",
        gap: "60px",
        marginLeft: "10rem",
        
      }}
    >
      {users.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "felx",
            width: "330px",
            height: "320px",
            padding: "20px",
            background: "#FFFFFF",
            boxShadow: "0px 25px 25px rgba(0, 0, 0, 0.05)",
            borderRadius: "10px",
            "&:hover" : {
              backgroundColor: "rgb(0,0,0,0.07)"
            }
          }}
        >
          <Avatar
            src={item.image}
            alt=""
            style={{
              width: "100px",
              height: "100px",
              paddingLeft: "60px",
              marginTop: "40px",
            }}
            variant="square"
          />
          <Box
            sx={{
              paddingRight: "160px",
              fontSize: "20px",
              width: "100%",
            }}
          >
            <Typography
              style={{
                fontSize: "20px",
                width: "100%",
                textAlign: "center",
                marginTop: "2rem",
                fontWeight: "bold",
              }}
              variant="h1"
              component={"h1"}
            >
              {item.name}
            </Typography>
          </Box>
          <Typography
            style={{
              textAlign: "center",
              color: "grey",
              marginTop: "1rem",
            }}
          >
            {item.cerear}
          </Typography>
          <Box
            sx={{
              paddingLeft: "50px",
              paddingTop: "15px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",
              marginRight: "40px",
            }}
          >
            <SvgIcon component={TwitterIcon} sx={{color: '#2E4CFF'}} />
            <SvgIcon component={YouTubeIcon} sx={{color: '#2E4CFF'}} inheritViewBox />
          </Box>
          <Typography
            style={{
              paddingLeft: "0px",
              textAlign: "center",
              lineHeight: "100px",
              color: "grey",
            }}
          >
            {item.date}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
