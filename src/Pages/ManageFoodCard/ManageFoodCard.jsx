import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useTable } from 'react-table';
import './ManageFoodCard.css';
import ManageFoodTable from '../ManageFoodTable/ManageFoodTable';

const tableColumn = [
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

                                <th>Update Button</th>
                                <th>Delete Button</th>
                                <th>Manage Button</th>
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
        </div>
    );
};

ManageFoodCard.propTypes = {
    food: PropTypes.object,
    myFood: PropTypes.array,
    setMyFood: PropTypes.func,
};

export default ManageFoodCard;