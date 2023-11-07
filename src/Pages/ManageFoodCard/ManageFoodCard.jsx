import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useTable } from 'react-table';
import './ManageFoodCard.css';
import ManageFoodTable from '../ManageFoodTable/ManageFoodTable';

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

const ManageFoodCard = ({ myFood, setMyFood }) => {

    // const { _id, foodName, quantity, pickUpLocation, date, note } = myFood;


    const columns = useMemo(() => tableColumn, []);
    const data = useMemo(() => [myFood], [myFood]);

    const tableInstance = useTable({
        columns: columns,
        data: data,
    })

    const {
        getTableProps,
        headerGroups,
    } = tableInstance;



    return (
        <table className='table-container' {...getTableProps()}>
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

            {
                myFood.map(food => <ManageFoodTable
                    key={food._id}
                    food={food}
                    myFood={myFood}
                    setMyFood={setMyFood}
                    tableColumn={tableColumn}
                ></ManageFoodTable>)
            }
        </table>
    );
};

ManageFoodCard.propTypes = {
    food: PropTypes.object,
    myFood: PropTypes.array,
    setMyFood: PropTypes.func,
};

export default ManageFoodCard;