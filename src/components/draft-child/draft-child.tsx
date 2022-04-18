import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import botM1 from '../../interfaces/botM1';
import DraftObject from '../../interfaces/draft-object';
import "./draft-child.scss";

export default function DraftChild(
  props: {
    draft: botM1
  }
) {
  React.useEffect(() => {
    createRows(props.draft);
  }, []);

  const [rows, setRows] = React.useState<DraftObject[]>([]);

  const createDataObject = (inputName: string, inputValue: string | number): DraftObject => {
    return {inputName, inputValue}
  }

  const createRows = (draftData: any) => {
    let tempRows: DraftObject[] = [];
    for(let key in draftData) {
      if(draftData.hasOwnProperty(key)) {
        let tempObj = createDataObject(key, draftData[`${key}`]);
        tempRows.push(tempObj);
      }
    }
    setRows(tempRows);
  }

  const useDraft = () => {

  }

  const removeDraft = () => {
    
  }

  return (
    <div>
      <div className="draftContainer">
        <TableContainer className="draft-table" component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Input</TableCell>
                <TableCell align="right">Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row: DraftObject) => (
                <TableRow
                  key={`row-${row.inputName}`}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.inputName}
                  </TableCell>
                  <TableCell align="right">{row.inputValue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="draft-buttons">
          <Button className="scenario-button-use" onClick={useDraft} variant="contained" color="inherit">
            Use
          </Button>
          <Button className="scenario-button-remove" onClick={removeDraft} variant="contained" color="inherit">
            Remove
          </Button>
        </div>
      </div>
    </div>
  )
}
