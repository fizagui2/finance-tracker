import {useState} from 'react';
import {currencyFormatter} from '@/lib/utils';
import ViewPanelForExpense from './panels/ViewPanelForExpense';

function CategoryListMainpage({expense}) {
    const [showViewPanelForExpense, setViewPanelForExpense] = useState(false);
    return (
        <>
        <ViewPanelForExpense
        show={showViewPanelForExpense}
        onClose={setViewPanelForExpense}
        expense={expense}
        />
        <button onClick={() => {setViewPanelForExpense(true);
            }}
        >
            <div className="flex items-center justify-between px-4 py-4 bg-blue-400 rounded-3xl">
            <div className="flex items-center gap-2">
                <div className="w-[25px] h-[25px] rounded-full" style={{backgroundColor: expense.color}}/>
                <h4 className="capitalize">{expense.title}</h4>
            </div>
            <p>{currencyFormatter(expense.total)}</p>
            </div>
        </button>
        </>
    );
}

export default CategoryListMainpage;