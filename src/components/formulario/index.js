import { useState } from "react";
import * as css from "./styles";
import { v4 as uuidv4 } from 'uuid';
import Table from "../table";

const Formulario = ({ handleAdd, transactionsList, setTransactionList }) => {

    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const handleSave = () => {
        if (!description || !amount) {
            alert("Informe a descrição e o valor!");
            return;
        }

        if (amount < 1) {
            alert("O valor tem que ser positivo!");
            return;
        }

        const transaction = {  
            id: uuidv4(),
            description: description,
            amount: amount,
            expense: isExpense
        };

        handleAdd(transaction);

        setDescription("");
        setAmount("");
    }

    return (
        <>
            <css.Container>
                <css.InputContent>
                    <css.Label>Descrição</css.Label>
                    <css.Input value={description} onChange={(e) => setDescription(e.target.value)}></css.Input>
                </css.InputContent>

                <css.InputContent>
                    <css.Label>Valor</css.Label>
                    <css.Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}></css.Input>
                </css.InputContent>

                <css.RadioGroup>
                    <css.Input
                        type="radio"
                        id="rIncome"
                        defaultChecked
                        name="group1"
                        onChange={() => setExpense(!isExpense)}
                    ></css.Input>
                    <css.Label htmlFor="rIncome">Entrada</css.Label>

                    <css.Input
                        type="radio"
                        id="rExpenses"
                        name="group1"
                        onChange={() => setExpense(!isExpense)}
                    ></css.Input>
                    <css.Label htmlFor="rExpenses">Saída</css.Label>
                </css.RadioGroup>

                <css.Button onClick={handleSave}>Adicionar</css.Button>
            </css.Container>

            <Table itens={transactionsList} setItens={setTransactionList}/>
        </>
    )
}

export default Formulario;