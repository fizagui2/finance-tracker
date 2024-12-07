"use client";
import {currencyFormatter} from '@/lib/utils';
import CategoryListMainpage from '@/components/CategoryListMainpage';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import {useState, useContext, useEffect} from 'react';
import {contextForFinance} from '@/lib/store/financeContext'
import { contextForAuth } from '@/lib/store/authContext';
import AddPanelForIncome from '@/components/panels/AddPanelForIncome';
import AddPanelForExpenses from '@/components/panels/AddPanelForExpenses';
import SignIn from '@/components/SignIn';

ChartJS.register(ArcElement, Tooltip, Legend);


export default function Home() {
  const [showAddPanelForIncome, setShowAddPanelForIncome] = useState(false);
  const [showAddExpensePanel, setShowAddExpensePanel] = useState(false);
  const [balance, setBalance] = useState(0);
  const {expenses, income} = useContext(contextForFinance);
  const {user} = useContext(contextForAuth);



  useEffect(() => {
    const newBalance = income.reduce((total, i) => {
      return total + i.amount;
    }, 0) - expenses.reduce((total, e) => {
      return total + e.total;
    }, 0);

    setBalance(newBalance);
  }, [expenses, income]);

    //Verifies if the user is signed in in order to show user information/data
  if(!user){
    return <SignIn />;
  }




  return (
    <>
      {/*Add Income Panel*/}
      <AddPanelForIncome 
        show={showAddPanelForIncome} 
        onClose={setShowAddPanelForIncome}
      />




      {/*Add Expenses Panel*/}
      <AddPanelForExpenses
        show={showAddExpensePanel}
        onClose={setShowAddExpensePanel}
      />
    <main className="container max-w-2xl px-6 mx-auto">
      <section className="py-3">
        <small className="text-black text-xl">My Balance</small>
        <h2 className="text-4xl font-bold text-black">{ currencyFormatter(balance)}</h2>
      </section>

      <section className="flex items-center gap-2 py-3">
        <button onClick={() => {
          setShowAddExpensePanel(true);
        }} className="btn primary-button">
          + Expenses
        </button>
        <button 
          onClick={() => {
            setShowAddPanelForIncome(true);
        }} 
        className="btn primary-button-outline">+ Income</button>
      </section>





      {/*Expenses*/}
      <section className="py-6">
        <h3 className="text-2xl text-black">My Expenses</h3>
        <div className="flex flex-col gap-4 mt-6">
          {expenses.map((expense) =>{
            return (
              <CategoryListMainpage 
                key={expense.id}
                expense={expense}
              />
            );
          })}
        </div>
      </section>





      {/*Chart Section*/}
      <section className="py-6">
        <a id="chart" />
          <h3 className="text-2xl text-black">Statistic Chart</h3>
          <div className="w-3/4 mx-auto">
            <Doughnut data={{
              labels: expenses.map(expense => expense.title),
              datasets: [
                {
                  label: "Expenses",
                  data: expenses.map(expense => expense.total),
                  backgroundColor: expenses.map(expense => expense.color),
                  borderColor: ['#18181b'],
                  borderWidth: 5,
                },
              ],
            }}
            />
          </div>
      </section>
    </main>
    </>
  );
} 
