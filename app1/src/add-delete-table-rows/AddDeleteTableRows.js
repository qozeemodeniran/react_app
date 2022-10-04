import React, { useState } from 'react';
  
import TableRows from './TableRows';

function AddDeleteTableRows() {
    // add table rows dynamically
    const [rowsData, setRowsData] = useState([]);
    const addTableRows = () => {
        const rowsInput = {
        name: '',
        email: ''
        }
        setRowsData([...rowsData, rowsInput])
    }

    // delete table rows dynamically
    const deleteTableRows = (index)=>{
        const rows = [...rowsData];
        rows.splice(index, 1);
        setRowsData(rows);
    }

    // new
    const handleChange = (index, evnt)=>{
        const { name, value } = evnt.target;
        const rowsInput = [...rowsData];
        rowsInput[index][name] = value;
        setRowsData(rowsInput);
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th><button className="btn btn-outline-success" onClick={addTableRows} >Add Rows</button></th>
                    </tr>
                    </thead>
                <tbody>
                <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />
                </tbody> 
                </table>
                </div>
                <div className="col-sm-4">
                </div>
            </div>
        </div>
    )
}
export default AddDeleteTableRows;