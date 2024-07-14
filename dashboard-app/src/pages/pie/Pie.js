import React from "react";
import './PieCharts'
import PieCharts from "./PieCharts";
import Header from "../../components/Header";


export const data = [
        {
        "id": "make",
        "label": "make",
        "value": 126,
        "color": "hsl(226, 70%, 50%)"
        },
        {
        "id": "hack",
        "label": "hack",
        "value": 257,
        "color": "hsl(239, 70%, 50%)"
        },
        {
        "id": "javascript",
        "label": "javascript",
        "value": 312,
        "color": "hsl(217, 70%, 50%)"
        },
        {
        "id": "css",
        "label": "css",
        "value": 214,
        "color": "hsl(130, 70%, 50%)"
        },
        {
        "id": "go",
        "label": "go",
        "value": 141,
        "color": "hsl(116, 70%, 50%)"
        }
]


const Pie = () => {
    // // theme 
    // const theme = useTheme()


    return(
        <div>
            <Header title={"PIECHART PAGE"} subtitle={"Simple Pie Chart"}  />
        <PieCharts />
        </div>
    )
}
export default Pie;