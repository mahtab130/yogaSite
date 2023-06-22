import { Box, Button } from "@mui/material";
import PropTypes from "prop-types";

export const Buttons = ({ buttonName, style}) => {
  return (
    <Box style={{display:"flex" , justifyContent: "space-between"}}>
      <Button
        sx={{
          padding: "3px 20px",
          width: "145px",
          height: "55px",
          borderRadius: "10px",
          border: "1px solid #fff",
          fontSize: "15px",
          lineHeight: "21px",
          margin:"0rem 2rem",
          textTransform: 'none',
          "&:hover": {
            color: "white", 
          },
        ...style}}
      >
        {buttonName}
      </Button>
    </Box>
  );
};

Buttons.propTypes = {
  buttonName: PropTypes.string,
  style: PropTypes.any
};
