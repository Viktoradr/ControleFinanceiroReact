
import { useEffect } from "react";
import { useState } from "react";
import Formulario from "./components/formulario";
import Header from "./components/header";
import Resumo from "./components/resumo";
import GlobalStyle from "./styles/global";

function App() {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionList] = useState(
    data ? JSON.parse(data) : []
  );
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

      const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
      const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

      const total = Math.abs(income - expense).toFixed(2);

      setIncome(`R$ ${income}`);
      setExpense(`R$ ${expense}`);
      setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);

  }, [transactionsList]);

  const handleAdd = (transaction) => {
    const newArrayTransaction = [...transactionsList, transaction];

    setTransactionList(newArrayTransaction);

    localStorage.setItem("transaction", JSON.stringify(newArrayTransaction));
  }

  return (
    <>
      <Header />
      <Resumo {...{ income, expense, total }} />
      <Formulario 
        handleAdd={handleAdd} 
        transactionsList={transactionsList} 
        setTransactionList={setTransactionList} />
      <GlobalStyle />
    </>
  );
}

export default App;
