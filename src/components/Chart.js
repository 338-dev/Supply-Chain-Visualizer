import { Paper } from '@mui/material';
import React, { memo } from 'react';
import { Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart, Bar } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc' }}>
        <p>{`Product: ${label}`}</p>
        <p style={{ color: "#ff7300" }}>{`Quantity: ${payload[2].value}`}</p>
        <p style={{ color: "#413ea0" }}>{`Price: Rs. ${payload[1].value}`}</p>
      </div>
    );
  }

  return null;
};

const Chart = memo(({ data }) => {


  return (
    <Paper style={{ height: 400, width: '100%', marginTop: '20px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" label={{ value: 'Quantity', angle: -90, position: 'insideLeft' }} />
          <YAxis yAxisId="right" orientation="right" label={{ value: 'Price', angle: -90, position: 'insideRight' }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line yAxisId="right" type="linear" dataKey="price" stroke="#413ea0" />
          <Bar yAxisId="right" dataKey="price" barSize={10} fill="#413ea0" />
          <Line yAxisId="left" type="linear" dataKey="quantity" stroke="#ff7300" />
          <Bar yAxisId="left" dataKey="quantity" barSize={10} fill="#ff7300"/>
        </ComposedChart>
      </ResponsiveContainer>
    </Paper>
  );
});

export default Chart;
