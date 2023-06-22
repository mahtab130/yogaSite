import { Box, Typography } from "@mui/material";
import { Buttons } from "../../controllers/Buttons";

export const ContactUs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: " 500px",
        backgroundColor: "#E5E5E5",
      }}
    >
      <Box
        sx={{
          width: "750px",
          height: "100px",
          boxShadow: "25px 25px 25px  rgba(0, 0, 0, 0.05)",
          padding: "30px",
          borderRadius: "10px",
          backgroundColor: "#fff",
        }}
      >
        <Typography sx={{ marginLeft: "2rem" }} variant="h4" component={"h3"}>Have any question about us</Typography>
        <Buttons
          buttonName="Send Email"
          style={{
            marginLeft: "35rem",
            marginTop: "-10px",
            backgroundColor: "#2E4CFF",
            color: "white",
          }}
        />
        <Typography
          sx={{
            marginLeft: "2rem",
            color: "grey",
          }}
        >
          Just drop us an email
        </Typography>
      </Box>
    </Box>
  );
};
