import { Box } from "@mui/material";
import React from "react";
import { DataGrid} from '@mui/x-data-grid';
import {rows, columns} from './Data'
import Header from "../../components/Header";


const Invoices = () => {
    return(
        <Box sx={{ height: 600, width:"97%", mx: "auto"  }}>
            <Header title={"INVOICES"} subtitle={"List of Invoices Balances"} />
        <DataGrid
        checkboxSelection
        rows={rows} columns={columns} />
    </Box>
    )
}

export default Invoices;