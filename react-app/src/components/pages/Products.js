import React from "react";
import '../../App.css'
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: false,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: false,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: false,
  },
];

const rows = [
  { id: 1, firstName: 'Mika', lastName: 'Mikic', age: 35 },
  { id: 2, firstName: 'Pera', lastName: 'Peric', age: 42 },
  { id: 3, firstName: 'Jova', lastName: 'Jovic', age: 45 },
  { id: 4, firstName: 'Ana', lastName: 'Savic', age: 16 },
  { id: 5, firstName: 'Mira', lastName: 'Nikolic', age: 22 },
  { id: 6, firstName: 'Ema', lastName: 'Babic', age: 19 },
  { id: 7, firstName: 'Misa', lastName: 'Jelic', age: 44 },
  { id: 8, firstName: 'Sasa', lastName: 'Milic', age: 36 },
  { id: 9, firstName: 'Aca', lastName: 'Jovic', age: 65 },
  { id: 10, firstName: 'Mira', lastName: 'Nikolic', age: 22 },
  { id: 11, firstName: 'Ema', lastName: 'Babic', age: 19 },
  { id: 12, firstName: 'Misa', lastName: 'Jelic', age: 44 },
  { id: 13, firstName: 'Sasa', lastName: 'Milic', age: 36 },
  { id: 14, firstName: 'Aca', lastName: 'Jovic', age: 65 },
  { id: 15, firstName: 'Mira', lastName: 'Nikolic', age: 22 },
  { id: 16, firstName: 'Ema', lastName: 'Babic', age: 19 },
  { id: 17, firstName: 'Misa', lastName: 'Jelic', age: 44 },
  { id: 18, firstName: 'Sasa', lastName: 'Milic', age: 36 },
  { id: 19, firstName: 'Aca', lastName: 'Jovic', age: 65 },
];

 

export default function Products() {
    return (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            disableSelectionOnClick
            checkboxSelection
             
            
          />
        </div>
      );
}        
