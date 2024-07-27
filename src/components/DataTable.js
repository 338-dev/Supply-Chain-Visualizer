import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper } from '@mui/material';

const DataTable = ({ columns, rows, uniqueIdentifier }) => {
  const centeredColumns = React.useMemo(() => 
    columns.map((column) => ({
      ...column,
      renderCell: (params) => <div>{params.value}</div>,
      headerAlign: 'center',
      align: 'center',
      flex: 1
    })),
    [columns]
  );
  
  return (
    <Paper style={{ height: 400, marginTop: '20px' }}>
      <DataGrid rows={rows} columns={centeredColumns} getRowId={(row) => row[uniqueIdentifier]} columnBufferPx={0} />
    </Paper>
  );
};

export default DataTable;
