import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography, TextField} from '@material-ui/core';
//======================================================
const useStyles = makeStyles({
  root: {
    height: '500px',
    width: '400px',
    border: '2px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    color: 'white',
  },
  valueRow: {
    height: '20%',
    width: '100%',
    border: '1px solid grey',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: '4px',
    color: 'white',
    backgroundColor: 'black',
  },
  numberRow: {
    height: '20%',
    // border: '1px solid white',
    width: '100%',
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    color: 'white',
  },
  regularButton: {
    height: '100%',
    width: '100%',
    color: 'white',
    // border: '1px solid dark grey'
  },
  operatorButton: {
    height: '100%',
    width: '100%',
    color: 'white',
    backgroundColor: 'orange',
  },
  equalsRow: {
    height: '20%',
    width: '100%',
    display: 'flex',
    color: 'white',
  },
  equals: {
    height: '100%',
    width: '100%',
    color: 'white',
    // border: '1px solid dark grey'
  },
});
//======================================================
export default function Calculator() {
  const classes = useStyles();

  const [currentVal, setCurrentVal] = useState('0'); // useState hook
  const [pendingVal, setPendingVal] = useState(null);
  const [operation, setOperation] = useState(null);

  const clear = () => {
    setCurrentVal(0);
    setPendingVal(null);
    setOperation(null);
  }

  const addition = () => {
    setCurrentVal(pendingVal);
    setPendingVal(null);
    setOperation('addition');
  }
  const subtraction = () => {
    setCurrentVal(pendingVal);
    setPendingVal(null);
    setOperation('subtraction');
  }

  const multiply = () => {
    setCurrentVal(pendingVal);
    setPendingVal(null);
    setOperation('multiply');
  }

  const division = () => {
    setCurrentVal(pendingVal);
    setPendingVal(null);
    setOperation('division');
  }

  const appendVal = (inputVal) => {
    setPendingVal(pendingVal === null ? inputVal : pendingVal + inputVal); //ternary
  }

  const calculate = () => {
    switch(operation){ // switch operator
      case 'addition':
        setCurrentVal(String(Number(currentVal) + Number(pendingVal)));
        setPendingVal(null);
        break;
      case 'subtraction':
        setCurrentVal(String(Number(currentVal) - Number(pendingVal)));
        setPendingVal(null);
        break;
      case 'multiply':
        setCurrentVal(String(Number(currentVal) * Number(pendingVal))); 
        setPendingVal(null);
        break;
      case 'division':
        setCurrentVal(String(Number(currentVal) / Number(pendingVal)));
        setPendingVal(null);
        break;
      default:
        alert('Choose an operation');
        break;
    }
  }
//======================================================
  return (
    <Grid className={classes.root}>
      <Grid className={classes.valueRow}>
        <Typography variant="h2">{pendingVal === null ? currentVal : pendingVal}</Typography>
      </Grid>
      <Grid className={classes.numberRow}>
        <Button 
          className={classes.regularButton}
          variant='outlined'
          onClick={() => appendVal('7')} 
        >7</Button>
        <Button 
          className={classes.regularButton}
          variant='outlined'
          onClick={() => appendVal('8')} 
        >8</Button>
        <Button 
          className={classes.regularButton}
          variant='outlined'
          onClick={() => appendVal('9')} 
        >9</Button>
        <Button 
          className={classes.operatorButton}
          onClick={() => clear()}
          variant='outlined'
        >Clear</Button>
      </Grid>
      <Grid className={classes.numberRow}>
        <Button 
          className={classes.regularButton}
          variant='outlined'
          onClick={() => appendVal('4')} 
        >4</Button>
        <Button 
          className={classes.regularButton}
          variant='outlined'
          onClick={() => appendVal('5')} 
        >5</Button>
        <Button 
          className={classes.regularButton}
          variant='outlined'
          onClick={() => appendVal('6')} 
        >6</Button>
        <Button
          className={classes.operatorButton} 
          onClick={() => addition()}
          variant='outlined'
        >+</Button>
      </Grid>
      <Grid className={classes.numberRow}>
        <Button 
          className={classes.regularButton}
          variant='outlined'
          onClick={() => appendVal('1')} 
        >1</Button>
        <Button 
          className={classes.regularButton}
          variant='outlined'
          onClick={() => appendVal('2')} 
        >2</Button>
        <Button 
          className={classes.regularButton}
          variant='outlined'
          onClick={() => appendVal('3')} 
        >3</Button>
        <Button
          className={classes.operatorButton} 
          variant='outlined' 
          onClick={() => subtraction()}
        >-</Button>
      </Grid>
      <Grid className={classes.equalsRow}>
        <Button
        className={classes.regularButton}
        variant='outlined'
        onClick={() => appendVal('0')}
        >0</Button>
        <Button
        className={classes.operatorButton}
        variant='outlined'
        onClick={ () => multiply ()}
        >*</Button>
        <Button 
        className={classes.operatorButton}
        variant='outlined'
        onClick={ () => division ()}        
        >/</Button>
        <Button 
          className={classes.operatorButton}
          onClick={() => calculate()}
          variant='outlined'
        >=</Button>
      </Grid>
    </Grid>
  );
}