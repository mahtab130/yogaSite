import { Buttons } from "../controllers/Buttons";

import logo from "../../assets/images/logo.png";
import { Avatar, Box, Button, Tooltip } from "@mui/material";

export const Header = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ margin: "4rem 6rem", display: "flex" }}>
        <Avatar src={logo} sx={{ width: "50px", height: "50px" }} variant="square" />
        <ul
          style={{
            display: "flex",
            listStyleType: "none",
            color: "white",
            gap: "55px",
            marginLeft: "17rem",
          }}
        >
          <Tooltip title="Add" arrow>
            <Button
              sx={{
                fontSize: "18px",
                lineHeight: "21px",
                fontWeight: "600",
                color: "white",
                "&:hover": {
                  color: "transparent", WebkitTextStroke: "1px white"
                },
              }}
            >
              Home
            </Button>
          </Tooltip>
          <Tooltip title="Add" arrow>
            <Button
              sx={{
                fontSize: "18px",
                lineHeight: "21px",
                fontWeight: "600",
                color: "white",
                "&:hover": {
                  color: "transparent", WebkitTextStroke: "1px white"
                },
              }}
            >
              About
            </Button>
          </Tooltip>
          <Tooltip title="Add" arrow>
            <Button
              sx={{
                fontSize: "18px",
                lineHeight: "21px",
                fontWeight: "600",
                color: "white",
                "&:hover": {
                  color: "transparent", WebkitTextStroke: "1px white"
                },
              }}
            >
              Classes
            </Button>
          </Tooltip>
          <Tooltip title="Add" arrow>
            <Button
              sx={{
                fontSize: "18px",
                lineHeight: "21px",
                fontWeight: "600",
                color: "white",
                "&:hover": {
                  color: "transparent", WebkitTextStroke: "1px white"
                },
              }}
            >
              Teachers
            </Button>
          </Tooltip>
          <Tooltip title="Add" arrow>
            <Button
              sx={{
                fontSize: "18px",
                lineHeight: "21px",
                fontWeight: "600",
                color: "white",
                "&:hover": {
                  color: "transparent", WebkitTextStroke: "1px white"
                },
              }}
            >
              Blog
            </Button>
          </Tooltip>
        </ul>
        <Buttons
          buttonName="Contact Us"
          style={{
            color: "#2E4CFF",
            marginLeft: "15rem",
            backgroundColor: "#fff",
            
          }}
        />
      </Box>
    </Box>
  );
};
