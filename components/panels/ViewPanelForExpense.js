import {useContext} from 'react';
import {contextForFinance} from '@/lib/store/financeContext';

import Panel from '@/components/Panel';
import { currencyFormatter } from '@/lib/utils';
import {IoTrashSharp} from "react-icons/io5";
import {toast} from "react-toastify";

function ViewPanelForExpense({show, onClose, expense}) {
    const {deleteExpenseItem, deleteExpenseCategory} = useContext(contextForFinance);

    const deleteExpenseHandler = async () => {
        try {
            await deleteExpenseCategory(expense.id);
            toast.success("Expense Category Deleted!");
        } catch (error) {
            console.log(error.message);
            toast.error(error.message);
        }
    };

    const deleteExpenseItemHandler = async (item) => {
        try {
            //Remove the item from the list
            const updatedItems = expense.items.filter((i) => i.id !== item.id);

            //update the expense balance
            const updatedExpense = {
                items: [...updatedItems],
                total: expense.total - item.amount,
            };

            await deleteExpenseItem(updatedExpense, expense.id);
            toast.success("Expense Deleted!")
        } catch (error) {
            console.log(error.message);
            toast.error(error.message);
        }
    };

    return <Panel show={show} onClose={onClose}>
                <div className="flex items-center justify-between">
                    <h2 className="text-4xl">{expense.title}</h2>
                    <button onClick={deleteExpenseHandler} className="btn btn-danger">Delete</button>
                </div>

                <div>
                    <h3 className="my-4 text-2xl">Expense History</h3>
                    {expense.items.map((item) => {
                        return (
                            <div key={item.id} className="flex items-center justify-between">
                                <small>{item.createdAt.toMillis ?
                                new Date(item.createdAt.toMillis()).toISOString() :
                                item.createdAt.toISOString()}
                                </small>
                                <p className="flex items-center gap-2">
                                    {currencyFormatter(item.amount)}
                                    <button onClick={() => {
                                        deleteExpenseItemHandler(item)
                                    }}>
                                    <IoTrashSharp />
                                    </button>
                                </p>
                            </div>
                        );
                    })}
                </div>
            </Panel>
}

export default ViewPanelForExpense;