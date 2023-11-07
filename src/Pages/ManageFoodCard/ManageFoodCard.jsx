import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useTable } from 'react-table';
import './ManageFoodCard.css';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

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
]

const ManageFoodCard = ({ food, myFood, setMyFood }) => {

    // const { _id, foodName, quantity, pickUpLocation, date, note } = food;
    const { _id } = food;

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


    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/food/${_id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your food card has been deleted.',
                                    'success'
                                )
                                const remaining = myFood.filter(request => request._id !== _id)
                                setMyFood(remaining);
                            }
                        })
                }
            })
    }


    return (
        <div className='table-container'>
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup) => (
                            <tr key={headerGroup._id}
                                {...headerGroup.getHeaderGroupProps()}
                            >
                                {headerGroup.headers.map((column) => (
                                    <th key={column.id} {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                    </th>
                                ))}

                                <th>Update</th>
                                <th>Delete</th>
                                <th>Manage</th>
                            </tr>
                        ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {
                        rows.map(row => {
                            prepareRow(row)
                            return (
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
                                    <td>
                                        <Link to={`/updateFood/${_id}`}>
                                            <button className='btn btn-info w-full'>Update</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button className='btn btn-error w-full' onClick={() => handleDelete(_id)}>Delete</button>
                                    </td>
                                    <td>
                                        <Link to={`/manageSingleFood/${_id}`}>
                                            <button className='btn btn-success w-full'>Manage</button>
                                        </Link>
                                    </td>
                                </tr>
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