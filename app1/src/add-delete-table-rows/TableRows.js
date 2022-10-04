function TableRows({rowsData, deleteTableRows, handleChange}) {
    return (
        rowsData.map((data, index) => {
            const {name, email} = data;

            return (
                <tr key={index}>
                    <td>
                        <input 
                            type="text"
                            value={name}
                            onChange={(evnt)=>(handleChange(index, evnt))}
                            name="name"
                            className="form-control"
                        />
                    </td>
                    <td>
                        <input 
                            type="text"
                            value={email}
                            onChange={(evnt)=>(handleChange(index, evnt))}
                            name="email"
                            className="form-control"
                        />
                    </td>
                    <td>
                        <button 
                            className="btn btn-outline-danger"
                            onClick={(deleteTableRows(index))}    
                        >Delete
                        </button>
                    </td>
                </tr>
            )
        })
    )
}

export default TableRows;