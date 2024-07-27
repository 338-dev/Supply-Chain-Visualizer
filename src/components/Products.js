import React, { useState, useEffect, useMemo } from 'react';
import { parseCSV } from '../utils/csvParser.js';
import DataTable from './DataTable';
import Chart from './Chart';
import Product from '../assets/products.csv';
import { CircularProgress, Paper, Typography } from '@mui/material';

const Products = () => {
  const [data, setData] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    parseCSV(Product, (result) => {
      setData(result.data);
      setChartData(result.data.map((item, index) => ({ name: item['Product Name'], quantity: item['Stock Quantity'], price: item['Unit Price'] })));
    });
    setLoading(false);
  }, []);

  const columns = useMemo(() => 
    Object.keys(data?.[0] || {}).map((key) => ({ 
      field: key, 
      headerName: key, 
      width: 150, 
    })), 
    [data]
  );

  return (loading || data === null) ?
    (
      <CircularProgress disableShrink />
    ) :
    (
      <Paper style={{ padding: '20px', margin: '20px 0' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Products
        </Typography>
        <Chart data={chartData} />
        <DataTable columns={columns} rows={data} uniqueIdentifier={'Product ID'} />
      </Paper>
    );
};

export default Products;
