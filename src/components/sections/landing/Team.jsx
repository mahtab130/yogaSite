import { Box, Typography } from '@mui/material'
import {PersonCards} from '../../common/PersonCards'

export const Team = () => {
    return (
        <Box
        style={{
          height: "500px",
          width: "100%",
          backgroundColor: "#E5E5E5"
        }}
      >
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "700",
              fontSize: "50px",
              lineHeight: "59px",
            }} variant='h1' component={"h1"}

          >
            Our Amazing Team
          </Typography>
        <Box style={{}}>
            <PersonCards/>
        </Box>
      </Box>
    )
}