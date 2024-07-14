import React from "react";
// import all things
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Divider, Stack } from "@mui/material";
import Header from "../../components/Header";




const FAQ = () => {
    // use  state
    const [expanded, setExpanded] = React.useState(false);


    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return(
    <Stack direction={"column"} gap={2}>
        <Header title={"FAQ PAGE"}  />
        <Accordion defaultExpanded  onChange={handleChange('panel1')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Who is Mohamed Elshamy ?
            </Typography>
            {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                ENG - Mohamed Elshamy is a Full-Stack developer
            </Typography>
            </AccordionDetails>
        </Accordion>


        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>MY SKILLS !</Typography>
            {/* <Typography sx={{ color: 'text.secondary' }}>
                You are currently not an owner
            </Typography> */}
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                HTML | CSS | JS | Bootstrap | React.js | Redux | React-Redux 
                <Divider />
                Redux-Toolkit | Next.js | MongoDB | Mongoose | Express.js | Material-UI
            </Typography>
            </AccordionDetails>
        </Accordion>


        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Advanced settings
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
                Filtering has been entirely disabled for whole web server
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
            </AccordionDetails>
        </Accordion>


        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
            >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Advanced settings
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
                Filtering has been entirely disabled for whole web server
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Advanced settings
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
                Filtering has been entirely disabled for whole web server
            </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
            </AccordionDetails>
        </Accordion>
    </Stack>

    )
}
export default FAQ;