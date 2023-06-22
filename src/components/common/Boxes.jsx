import { Button, Typography } from "@mui/material";
import PropTypes from "prop-types";

import { string } from "prop-types";

export const Boxes = ({ box , style }) => {
  return (
    <Button
      sx={{
        width: "150px",
        height: "150px",
        background: "#2E4CFF",
        boxShadow: "0px 25px 25px rgba(0, 0, 0, 0.05)",
        borderRadius: "30px",
        color: "#fff",
      ...style,
      "&:hover": {
        color: "#2E4CFF", 
        backgroundColor: "white"
      },
    }}
    >
      <Typography
        style={{
          fontWeight: "500",
          lineHeight: "29px",
          textAlign: "center",
          alignItems: "center",
          borderRadius: "10px"
        }} 
      >
        {box}
      </Typography>
    </Button>
  );
};

Boxes.propTypes = {
  box: string,
  style: PropTypes.any,
};
