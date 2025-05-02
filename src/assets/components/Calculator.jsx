import React, { useState } from 'react';
import { Button, Grid, Paper, Box, Typography } from '@mui/material';

function Calculator() {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setDisplay(eval(display));
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === 'AC') {
      setDisplay('');
    } else if (value === 'Back') {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <Paper sx={{ padding: 2, width: { xs: '100%', sm: 400, md: 500 }, margin: 'auto' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ marginRight: 2 }}>Enter your number:</Typography>
            <input type="text" value={display} readOnly style={{ width: '100%', padding: 10, fontSize: 24 }} />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="error" onClick={() => handleClick('AC')} sx={{ width: '100%' }}>AC</Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="primary" onClick={() => handleClick('Back')} sx={{ width: '100%' }}>Back</Button>
        </Grid>

        <Grid item xs={3}>
          <Button variant="contained" color="primary" onClick={() => handleClick(7)} sx={{ width: '100%' }}>7</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="primary" onClick={() => handleClick(8)} sx={{ width: '100%' }}>8</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="primary" onClick={() => handleClick(9)} sx={{ width: '100%' }}>9</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="primary" onClick={() => handleClick('/')} sx={{ width: '100%' }}>/</Button>
        </Grid>

        <Grid item xs={3}>
          <Button variant="contained" color="primary" onClick={() => handleClick(4)} sx={{ width: '100%' }}>4</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="primary" onClick={() => handleClick(5)} sx={{ width: '100%' }}>5</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="primary" onClick={() => handleClick(6)} sx={{ width: '100%' }}>6</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="primary" onClick={() => handleClick('*')} sx={{ width: '100%' }}>*</Button>
        </Grid>

        <Grid item xs={3}>
          <Button variant="contained" color="primary" onClick={() => handleClick(1)} sx={{ width: '100%' }}>1</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="primary" onClick={() => handleClick(2)} sx={{ width: '100%' }}>2</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="primary" onClick={() => handleClick(3)} sx={{ width: '100%' }}>3</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="primary" onClick={() => handleClick('-')} sx={{ width: '100%' }}>-</Button>
        </Grid>

        <Grid item xs={6}>
          <Button variant="contained" color="primary" onClick={() => handleClick(0)} sx={{ width: '100%' }}>0</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="primary" onClick={() => handleClick('.')} sx={{ width: '100%' }}>.</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="primary" onClick={() => handleClick('=')} sx={{ width: '100%' }}>=</Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Calculator;
