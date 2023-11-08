import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTable } from 'react-table';
import Swal from 'sweetalert2';



const ManageFoodTable = ({ food, myFood, setMyFood, tableColumn }) => {

    const { _id } = food;

    const columns = useMemo(() => tableColumn, [tableColumn]);
    const data = useMemo(() => [food], [food]);

    const tableInstance = useTable({
        columns: columns,
        data: data,
    })

    const {
        getTableBodyProps,
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
                    fetch(`https://community-food-sharing-server-six.vercel.app/food/${_id}`, {
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
        <tbody className='overflow-x-auto' key={food.id} {...getTableBodyProps()}>
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
                                    <button className='btn btn-info w-full font-bold text-black'>Update</button>
                                </Link>
                            </td>
                            <td>
                                <button className='btn btn-error w-full font-bold text-black' onClick={() => handleDelete(_id)}>Delete</button>
                            </td>
                            <td>
                                <Link to={`/manageSingleFood/${_id}`}>
                                    <button className='btn btn-success w-full  font-bold text-black'>Manage</button>
                                </Link>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    );
};

ManageFoodTable.propTypes = {
    food: PropTypes.object,
    myFood: PropTypes.array,
    setMyFood: PropTypes.func,
    tableColumn: PropTypes.array,
};

export default ManageFoodTable;