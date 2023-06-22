import PropTypes from "prop-types";

import { Buttons } from "../controllers/Buttons";
import { cards } from "../data/data";
import { Box, Typography } from "@mui/material";

export const Card = ({ style }) => {
  return (
    <Box
      sx={{
        height: "400px",
        background: "#E5E5E5",
        margin: "5rem 14rem",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-end",
        gap: "80px",
        ...style,
      }}
    >
      {cards.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "felx",
            width: "300px",
            height: "max-content",
            background: "#fff",
            boxShadow: "0px 25px 25px rgba(0, 0, 0, 0.05)",
            borderRadius: "10px",
            textAlign: " center",
            justifyContent: "flex-end",
            marginTop: "40px",
          }}
        >
          {item?.item && (
            <Box
              sx={{
                backgroundColor: "#2E4CFF",
                width: "100%",
                height: "60px",
                borderRadius: "10px 10px 0 0 ",
              }}
            >
              <Typography
                sx={{ color: "white", paddingTop: "15px", fontSize: "20px" }} variant="h1"
              >
                {item.div}
              </Typography>
            </Box>
          )}
          <Typography
            sx={{ fontWeight: "500", fontSize: "25px", lineHeight: "50px" }}
          >
            {item.time}
          </Typography>
          <Typography
            sx={{ fontWeight: "700", fontSize: "55px", lineHeight: "90px" }}
          >
            {item.member}
          </Typography>
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "25px",
              lineHeight: "100px",
              color: "grey",
            }}
          >
            {item.save}
          </Typography>
          <Buttons
            buttonName={"Get Started"}
            style={{
              width: "150px",
              height: "50px",
              backgroundColor: "#2E4CFF",
              color: "#fff",
              margin: "20px auto ",
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

Card.propTypes = {
  style: PropTypes.any,
};
