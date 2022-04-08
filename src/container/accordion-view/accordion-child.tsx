import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './accordion-child.scss'

export default function AccordionChild(
  props: {
    title: string,
    component: any,
  }
) {
  const title: string = props.title;
  const component: any = props.component;

  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <span className="accordion-title">
              {title}
            </span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {component}
        </AccordionDetails>
      </Accordion>
  )
}
