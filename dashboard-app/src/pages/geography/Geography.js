import React from "react";
import { ResponsiveChoropleth } from '@nivo/geo'
import { Box, useTheme } from "@mui/material";
import {geo} from './World'
import Header from "../../components/Header";

export const data = [
        {
        "id": "AFG",
        "value": 641768
        },
        {
        "id": "AGO",
        "value": 691714
        },
        {
        "id": "ALB",
        "value": 906377
        },
        {
        "id": "ARE",
        "value": 32958
        },
        {
        "id": "ARG",
        "value": 98946
        },
        {
        "id": "ARM",
        "value": 790710
        },
        {
        "id": "ATA",
        "value": 585477
        },
        {
        "id": "ATF",
        "value": 106950
        },
        {
        "id": "AUT",
        "value": 638679
        },
        {
        "id": "AZE",
        "value": 283794
        },
        {
        "id": "BDI",
        "value": 557919
        },
        {
        "id": "BEL",
        "value": 584413
        },
        {
        "id": "BEN",
        "value": 510851
        },
        {
        "id": "BFA",
        "value": 571994
        },
        {
        "id": "BGD",
        "value": 296925
        },
        {
        "id": "BGR",
        "value": 469632
        },
        {
        "id": "BHS",
        "value": 720939
        },
        {
        "id": "BIH",
        "value": 665867
        },
        {
        "id": "BLR",
        "value": 514637
        },
        {
        "id": "BLZ",
        "value": 556928
        },
        {
        "id": "BOL",
        "value": 480536
        },
        {
        "id": "BRN",
        "value": 800892
        },
        {
        "id": "BTN",
        "value": 787009
        },
        {
        "id": "BWA",
        "value": 205431
        },
        {
        "id": "CAF",
        "value": 442334
        },
        {
        "id": "CAN",
        "value": 981545
        },
        {
        "id": "CHE",
        "value": 638701
        },
        {
        "id": "CHL",
        "value": 242942
        },
        {
        "id": "CHN",
        "value": 269123
        },
        {
        "id": "CIV",
        "value": 382962
        },
        {
        "id": "CMR",
        "value": 656840
        },
        {
        "id": "COG",
        "value": 18698
        },
        {
        "id": "COL",
        "value": 522976
        },
        {
        "id": "CRI",
        "value": 316791
        },
        {
        "id": "CUB",
        "value": 833351
        },
        {
        "id": "-99",
        "value": 627943
        },
        {
        "id": "CYP",
        "value": 571609
        },
        {
        "id": "CZE",
        "value": 962004
        },
        {
        "id": "DEU",
        "value": 265524
        },
        {
        "id": "DJI",
        "value": 29047
        },
        {
        "id": "DNK",
        "value": 942862
        },
        {
        "id": "DOM",
        "value": 4965
        },
        {
        "id": "DZA",
        "value": 810641
        },
        {
        "id": "ECU",
        "value": 645528
        },
        {
        "id": "EGY",
        "value": 619316
        },
        {
        "id": "ERI",
        "value": 64193
        },
        {
        "id": "ESP",
        "value": 355951
        },
        {
        "id": "EST",
        "value": 275992
        },
        {
        "id": "ETH",
        "value": 898956
        },
        {
        "id": "FIN",
        "value": 355815
        },
        {
        "id": "FJI",
        "value": 606420
        },
        {
        "id": "FLK",
        "value": 24853
        },
        {
        "id": "FRA",
        "value": 996832
        },
        {
        "id": "GAB",
        "value": 327286
        },
        {
        "id": "GBR",
        "value": 400890
        },
        {
        "id": "GEO",
        "value": 589813
        },
        {
        "id": "GHA",
        "value": 861974
        },
        {
        "id": "GIN",
        "value": 869598
        },
        {
        "id": "GMB",
        "value": 66956
        },
        {
        "id": "GNB",
        "value": 180751
        },
        {
        "id": "GNQ",
        "value": 458522
        },
        {
        "id": "GRC",
        "value": 250351
        },
        {
        "id": "GTM",
        "value": 433605
        },
        {
        "id": "GUY",
        "value": 495264
        },
        {
        "id": "HND",
        "value": 770982
        },
        {
        "id": "HRV",
        "value": 340267
        },
        {
        "id": "HTI",
        "value": 922310
        },
        {
        "id": "HUN",
        "value": 216044
        },
        {
        "id": "IDN",
        "value": 684909
        },
        {
        "id": "IND",
        "value": 62068
        },
        {
        "id": "IRL",
        "value": 161515
        },
        {
        "id": "IRN",
        "value": 864544
        },
        {
        "id": "IRQ",
        "value": 868248
        },
        {
        "id": "ISL",
        "value": 254132
        },
        {
        "id": "ISR",
        "value": 667887
        },
        {
        "id": "ITA",
        "value": 525380
        },
        {
        "id": "JAM",
        "value": 612928
        },
        {
        "id": "JOR",
        "value": 793661
        },
        {
        "id": "JPN",
        "value": 192518
        },
        {
        "id": "KAZ",
        "value": 825814
        },
        {
        "id": "KEN",
        "value": 803278
        },
        {
        "id": "KGZ",
        "value": 602879
        },
        {
        "id": "KHM",
        "value": 455704
        },
        {
        "id": "OSA",
        "value": 927097
        },
        {
        "id": "KWT",
        "value": 965985
        },
        {
        "id": "LAO",
        "value": 786653
        },
        {
        "id": "LBN",
        "value": 833792
        },
        {
        "id": "LBR",
        "value": 65358
        },
        {
        "id": "LBY",
        "value": 879267
        },
        {
        "id": "LKA",
        "value": 686288
        },
        {
        "id": "LSO",
        "value": 678571
        },
        {
        "id": "LTU",
        "value": 721730
        },
        {
        "id": "LUX",
        "value": 922869
        },
        {
        "id": "LVA",
        "value": 586779
        },
        {
        "id": "MAR",
        "value": 572076
        },
        {
        "id": "MDA",
        "value": 19731
        },
        {
        "id": "MDG",
        "value": 764452
        },
        {
        "id": "MEX",
        "value": 990219
        },
        {
        "id": "MKD",
        "value": 915098
        },
        {
        "id": "MLI",
        "value": 447503
        },
        {
        "id": "MMR",
        "value": 676038
        },
        {
        "id": "MNE",
        "value": 227603
        },
        {
        "id": "MNG",
        "value": 434393
        },
        {
        "id": "MOZ",
        "value": 541870
        },
        {
        "id": "MRT",
        "value": 612397
        },
        {
        "id": "MWI",
        "value": 665446
        },
        {
        "id": "MYS",
        "value": 931811
        },
        {
        "id": "NAM",
        "value": 163656
        },
        {
        "id": "NCL",
        "value": 158889
        },
        {
        "id": "NER",
        "value": 681214
        },
        {
        "id": "NGA",
        "value": 34941
        },
        {
        "id": "NIC",
        "value": 607520
        },
        {
        "id": "NLD",
        "value": 440950
        },
        {
        "id": "NOR",
        "value": 499861
        },
        {
        "id": "NPL",
        "value": 192764
        },
        {
        "id": "NZL",
        "value": 303252
        },
        {
        "id": "OMN",
        "value": 118180
        },
        {
        "id": "PAK",
        "value": 354689
        },
        {
        "id": "PAN",
        "value": 446262
        },
        {
        "id": "PER",
        "value": 746645
        },
        {
        "id": "PHL",
        "value": 18415
        },
        {
        "id": "PNG",
        "value": 786111
        },
        {
        "id": "POL",
        "value": 227900
        },
        {
        "id": "PRI",
        "value": 372367
        },
        {
        "id": "PRT",
        "value": 231249
        },
        {
        "id": "PRY",
        "value": 501255
        },
        {
        "id": "QAT",
        "value": 506879
        },
        {
        "id": "ROU",
        "value": 812323
        },
        {
        "id": "RUS",
        "value": 986882
        },
        {
        "id": "RWA",
        "value": 499821
        },
        {
        "id": "ESH",
        "value": 217109
        },
        {
        "id": "SAU",
        "value": 315286
        },
        {
        "id": "SDN",
        "value": 788113
        },
        {
        "id": "SDS",
        "value": 446395
        },
        {
        "id": "SEN",
        "value": 147302
        },
        {
        "id": "SLB",
        "value": 614314
        },
        {
        "id": "SLE",
        "value": 516643
        },
        {
        "id": "SLV",
        "value": 543978
        },
        {
        "id": "ABV",
        "value": 994042
        },
        {
        "id": "SOM",
        "value": 30465
        },
        {
        "id": "SRB",
        "value": 362287
        },
        {
        "id": "SUR",
        "value": 845150
        },
        {
        "id": "SVK",
        "value": 280670
        },
        {
        "id": "SVN",
        "value": 215662
        },
        {
        "id": "SWZ",
        "value": 789356
        },
        {
        "id": "SYR",
        "value": 798174
        },
        {
        "id": "TCD",
        "value": 845910
        },
        {
        "id": "TGO",
        "value": 755534
        },
        {
        "id": "THA",
        "value": 269664
        },
        {
        "id": "TJK",
        "value": 54289
        },
        {
        "id": "TKM",
        "value": 448529
        },
        {
        "id": "TLS",
        "value": 640953
        },
        {
        "id": "TTO",
        "value": 178441
        },
        {
        "id": "TUN",
        "value": 754709
        },
        {
        "id": "TUR",
        "value": 553795
        },
        {
        "id": "TWN",
        "value": 629299
        },
        {
        "id": "TZA",
        "value": 863147
        },
        {
        "id": "UGA",
        "value": 460214
        },
        {
        "id": "UKR",
        "value": 38412
        },
        {
        "id": "URY",
        "value": 38622
        },
        {
        "id": "USA",
        "value": 607606
        },
        {
        "id": "UZB",
        "value": 655420
        },
        {
        "id": "VEN",
        "value": 2735
        },
        {
        "id": "VNM",
        "value": 675980
        },
        {
        "id": "VUT",
        "value": 515727
        },
        {
        "id": "PSE",
        "value": 800356
        },
        {
        "id": "YEM",
        "value": 566790
        },
        {
        "id": "ZAF",
        "value": 43644
        },
        {
        "id": "ZMB",
        "value": 648024
        },
        {
        "id": "ZWE",
        "value": 104940
        },
        {
        "id": "KOR",
        "value": 691501
        }
    ]



const Geography = ({isDashboard = false}) => {
    const theme = useTheme()
    return(
        <div>
            <Header  title={isDashboard? null : "GEOGRAPHY PAGE"} subtitle= {isDashboard? null : "Simple Geography Chart"}   />
        <Box sx={{height: isDashboard? "460px" : "85vh", border: `2px solid ${theme.palette.text.primary}`, borderRadius: "6px"}}>

            <ResponsiveChoropleth
        data={data}
        theme={
            {
                "text": {
                    "fontSize": 11,
                    "fill": theme.palette.text.primary,
                    "outlineWidth": 0,
                    "outlineColor": "transparent"
                },
                "axis": {
                    "domain": {
                        "line": {
                            "stroke": theme.palette.divider,
                            "strokeWidth": 1
                        }
                    },
                    "legend": {
                        "text": {
                            "fontSize": 16,
                            "fill": theme.palette.text.primary,
                            "outlineWidth": 0,
                            "outlineColor": "transparent"
                        }
                    },
                    "ticks": {
                        "line": {
                            "stroke": theme.palette.text.secondary,
                            "strokeWidth": 1
                        },
                        "text": {
                            "fontSize": 11,
                            "fill": theme.palette.text.primary,
                            "outlineWidth": 0,
                            "outlineColor": "transparent"
                        }
                    }
                },
                "grid": {
                    "line": {
                        "stroke": theme.palette.text.divider,
                        "strokeWidth": 0
                    }
                },
                "legends": {
                    "title": {
                        "text": {
                            "fontSize": 11,
                            "fill": theme.palette.text.primary,
                            "outlineWidth": 0,
                            "outlineColor": "transparent"
                        }
                    },
                    "text": {
                        "fontSize": 15,
                        "fill": theme.palette.text.primary,
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    },
                    "ticks": {
                        "line": {},
                        "text": {
                            "fontSize": 10,
                            "fill": theme.palette.text.primary,
                            "outlineWidth": 0,
                            "outlineColor": "transparent"
                        }
                    }
                },
                "annotations": {
                    "text": {
                        "fontSize": 13,
                        "fill": theme.palette.text.primary,
                        "outlineWidth": 2,
                        "outlineColor": "#ffffff",
                        "outlineOpacity": 1
                    },
                    "link": {
                        "stroke": "#000000",
                        "strokeWidth": 1,
                        "outlineWidth": 2,
                        "outlineColor": "#ffffff",
                        "outlineOpacity": 1
                    },
                    "outline": {
                        "stroke": "#000000",
                        "strokeWidth": 2,
                        "outlineWidth": 2,
                        "outlineColor": "#ffffff",
                        "outlineOpacity": 1
                    },
                    "symbol": {
                        "fill": "#000000",
                        "outlineWidth": 2,
                        "outlineColor": "#ffffff",
                        "outlineOpacity": 1
                    }
                },
                "tooltip": {
                    "container": {
                        "background": theme.palette.background.paper,
                        "fontSize": 12
                    },
                    "basic": {},
                    "chip": {},
                    "table": {},
                    "tableCell": {},
                    "tableCellValue": {}
                }
            }
        }
        projectionScale={isDashboard? 70 : 150}
        features= {geo.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="blues"
        domain={[ 0, 1000000 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[ 0.5, 0.5 ]}
        projectionRotation={[ 0, 0, 0 ]}
        enableGraticule={false}
        graticuleLineColor="#dddddd"
        borderWidth={2}
        borderColor="#fff"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            },
            {
                id: 'gradient',
                type: 'linearGradient',
                colors: [
                    {
                        offset: 0,
                        color: '#000'
                    },
                    {
                        offset: 100,
                        color: 'inherit'
                    }
                ]
            }
        ]}
        fill={[
            {
                match: {
                    id: 'CAN'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'CHN'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'ATA'
                },
                id: 'gradient'
            }
        ]}
        legends={
            isDashboard? [] :
            [
            {
                anchor: 'bottom-left',
                direction: 'column',
                // justify: true,
                translateX: 20,
                translateY: -50,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: theme.palette.text.primary,
                itemOpacity: 0.85,
                symbolSize: 15,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: theme.palette.text.primary,
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
        </Box>
        </div>
    )
}

export default Geography;