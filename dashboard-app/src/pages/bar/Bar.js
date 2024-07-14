import React from "react";
import './BarChart'
import BarChart from "./BarChart";
import Header from "../../components/Header";

export const data = [
    {year: 2019, Spain:900, France: 1300, Germany: 1700},
    {year: 2020, Spain:1000, France: 1400, Germany: 1800},
    {year: 2021, Spain:1100, France: 1500, Germany: 1900},
    {year: 2022, Spain:1200, France: 1600, Germany: 2000},
    {year: 2023, Spain:1300, France: 1700, Germany: 2200}
]



const Bar = () => {
    // use theme
    // const theme = useTheme()

    return(
        <div>   
                <Header title={"BARCHART PAGE"} subtitle={"Simple Bar Chart"}  />
            <BarChart />
        </div>
    )
}
export default Bar;