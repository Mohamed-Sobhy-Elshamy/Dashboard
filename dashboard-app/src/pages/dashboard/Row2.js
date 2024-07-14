import { Box, IconButton, Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
// import Line from '../line/Line'
import LineCharts from '../line/LineCharts'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import { Transactions } from "./Data";


const Row2 = () => {
    const theme = useTheme()
    return(
        <Stack direction={"row"} flexWrap={"wrap"} gap={2} mt={3}>



            <Paper sx={{ maxWidth: 900, flexGrow: 1, minWidth: "400px"}}>

                <Stack direction={"row"} flexWrap={"wrap"} sx={{display: "flex", alignItems:"center", justifyContent: "space-between"}}>
                    <Box>
                        <Typography color={theme.palette.secondary.dark}
                            mb={1} mt={2.5} ml={4}
                            variant="h6"
                        >
                            Revenue Generated
                        </Typography>
                        <Typography variant="body1" ml={4}>
                            $59.342.32
                        </Typography>
                    </Box>
                    <Box>
                        <IconButton sx={{mr:3}}>
                            <DownloadOutlinedIcon sx={{fontSize: 45}} />
                        </IconButton>
                    </Box>
                </Stack>


                <LineCharts isDashboard={true} />
            </Paper>






            <Box sx={{overflow:"auto", maxHeight: 380, flexGrow: 1, minWidth: "280px" }}>
                <Paper>
                <Typography color={theme.palette.secondary.main}
                fontWeight={"bold"}
                p={1.3}variant="h5" >
                    Recent Transactions
                </Typography>
                </Paper>




            {Transactions.map((itme) => {
                return(
                    <Paper sx={{mt: 1, display: "flex", justifyContent:"space-between", alignItems: "center"}}>
                    <Box p={1.3}>
                        <Typography variant="body1" fontWeight="600">
                            {itme.txId}
                        </Typography>
                        <Typography variant="body1">{itme.user}</Typography>
                    </Box>
                    <Typography variant="body1">{itme.date}</Typography>
                    <Typography borderRadius={2}
                        p={1} bgcolor={theme.palette.error.main}
                        variant="body2"
                    >
                        $ {itme.cost}
                    </Typography>
                </Paper>
                )
            })}




                




            </Box>
        </Stack>
    )
}
export default Row2;