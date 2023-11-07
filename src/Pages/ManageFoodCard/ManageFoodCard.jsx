import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useTable } from 'react-table';
import './ManageFoodCard.css';
import { key } from 'localforage';

const tableColumn = [
    {
        Header: "Id",
        accessor: '_id',
    },
    {
        Header: "Food Name",
        accessor: 'foodName',
    },
    {
        Header: "Quantity",
        accessor: 'quantity',
    },
    {
        Header: "Pick Up Location",
        accessor: 'pickUpLocation',
    },
    {
        Header: "Expired Date",
        accessor: 'date',
    },
    {
        Header: "Note",
        accessor: 'note',
    },
]

const ManageFoodCard = ({ food }) => {

    // const { _id, foodName, quantity, pickUpLocation, date, note } = food;

    const columns = useMemo(() => tableColumn, []);
    const data = useMemo(() => [food], [food]);

    const tableInstance = useTable({
        columns: columns,
        data: data,
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance;


    const handleUpdate = () => {

    }


    const handleDelete = () => {

    }


    const handleManage = () => {

    }


    return (
        <div>
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup) => (
                            <tr key={headerGroup.id}
                                {...headerGroup.getHeaderGroupProps()}
                            >
                                {headerGroup.headers.map((column) => (
                                    <>
                                        <th key={column.id} {...column.getHeaderProps()}>
                                            {column.render('Header')}
                                        </th>
                                    </>
                                ))}
                            </tr>
                        ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {
                        rows.map(row => {
                            prepareRow(row)
                            return (
                                <>
                                    <tr
                                        key={row.id}
                                        {...row.getRowProps()}>
                                        {
                                            row.cells.map(cell => {
                                                return <td key={cell.id}
                                                    {...cell.getCellProps()}>
                                                    {cell.render('Cell')}
                                                </td>
                                            })
                                        }
                                    </tr>
                                    <tr>
                                        <td>
                                            <button className='btn btn-info w-full' onClick={() => handleUpdate()}>Update</button>
                                        </td>
                                        <td>
                                            <button className='btn btn-error w-full' onClick={() => handleDelete()}>Delete</button>
                                        </td>
                                        <td>
                                            <button className='btn btn-success w-full' onClick={() => handleManage()}>Manage</button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

ManageFoodCard.propTypes = {
    food: PropTypes.object,
    myFood: PropTypes.array,
    setMyFood: PropTypes.func,
};

export default ManageFoodCard;