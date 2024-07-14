import React from "react";
import LineCharts from "./LineCharts";
import Header from "../../components/Header";


export const data = [
        {
        "id": "japan",
        "color": "hsl(98, 70%, 50%)",
        "data": [
            {
            "x": "plane",
            "y": 73
            },
            {
            "x": "helicopter",
            "y": 235
            },
            {
            "x": "boat",
            "y": 27
            },
            {
            "x": "train",
            "y": 65
            },
            {
            "x": "subway",
            "y": 46
            },
            {
            "x": "bus",
            "y": 182
            },
            {
            "x": "car",
            "y": 9
            },
            {
            "x": "moto",
            "y": 123
            },
            {
            "x": "bicycle",
            "y": 203
            },
            {
            "x": "horse",
            "y": 168
            },
            {
            "x": "skateboard",
            "y": 173
            },
            {
            "x": "others",
            "y": 247
            }
        ]
        },
        {
        "id": "france",
        "color": "hsl(83, 70%, 50%)",
        "data": [
            {
            "x": "plane",
            "y": 188
            },
            {
            "x": "helicopter",
            "y": 290
            },
            {
            "x": "boat",
            "y": 176
            },
            {
            "x": "train",
            "y": 27
            },
            {
            "x": "subway",
            "y": 294
            },
            {
            "x": "bus",
            "y": 294
            },
            {
            "x": "car",
            "y": 274
            },
            {
            "x": "moto",
            "y": 41
            },
            {
            "x": "bicycle",
            "y": 227
            },
            {
            "x": "horse",
            "y": 26
            },
            {
            "x": "skateboard",
            "y": 279
            },
            {
            "x": "others",
            "y": 147
            }
        ]
        },
        {
        "id": "us",
        "color": "hsl(301, 70%, 50%)",
        "data": [
            {
            "x": "plane",
            "y": 277
            },
            {
            "x": "helicopter",
            "y": 110
            },
            {
            "x": "boat",
            "y": 168
            },
            {
            "x": "train",
            "y": 118
            },
            {
            "x": "subway",
            "y": 31
            },
            {
            "x": "bus",
            "y": 16
            },
            {
            "x": "car",
            "y": 78
            },
            {
            "x": "moto",
            "y": 191
            },
            {
            "x": "bicycle",
            "y": 77
            },
            {
            "x": "horse",
            "y": 298
            },
            {
            "x": "skateboard",
            "y": 147
            },
            {
            "x": "others",
            "y": 127
            }
        ]
        },
        {
        "id": "germany",
        "color": "hsl(262, 70%, 50%)",
        "data": [
            {
            "x": "plane",
            "y": 51
            },
            {
            "x": "helicopter",
            "y": 43
            },
            {
            "x": "boat",
            "y": 48
            },
            {
            "x": "train",
            "y": 58
            },
            {
            "x": "subway",
            "y": 94
            },
            {
            "x": "bus",
            "y": 259
            },
            {
            "x": "car",
            "y": 252
            },
            {
            "x": "moto",
            "y": 146
            },
            {
            "x": "bicycle",
            "y": 87
            },
            {
            "x": "horse",
            "y": 15
            },
            {
            "x": "skateboard",
            "y": 70
            },
            {
            "x": "others",
            "y": 170
            }
        ]
        },
        {
        "id": "norway",
        "color": "hsl(197, 70%, 50%)",
        "data": [
            {
            "x": "plane",
            "y": 219
            },
            {
            "x": "helicopter",
            "y": 189
            },
            {
            "x": "boat",
            "y": 143
            },
            {
            "x": "train",
            "y": 140
            },
            {
            "x": "subway",
            "y": 34
            },
            {
            "x": "bus",
            "y": 245
            },
            {
            "x": "car",
            "y": 209
            },
            {
            "x": "moto",
            "y": 293
            },
            {
            "x": "bicycle",
            "y": 99
            },
            {
            "x": "horse",
            "y": 53
            },
            {
            "x": "skateboard",
            "y": 192
            },
            {
            "x": "others",
            "y": 73
            }
        ]
        }
    ]


const Line = () => {
    // theme 
    // const theme = useTheme()


    return(
        <div>
            <Header title={"LINECHART PAGE"} subtitle={"Simple Line Chart"} />
            <LineCharts />
        </div>
    )
}
export default Line;