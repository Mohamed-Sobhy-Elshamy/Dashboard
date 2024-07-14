import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const Header = ({title, subtitle}) => {
    const theme = useTheme()

    return(
        <div>
            <Box mb={3}>
                <Typography variant="h5" sx={{
                    color: theme.palette.info.light,
                    fontWeight: "bold"
                }}>
                    {title}
                </Typography>
                <Typography variant="body1">{subtitle}</Typography>
            </Box>
        </div>
    )
}
export default Header;