import TableItem from "../tableItem";
import * as css from "./styles";

const Table = ({ itens, setItens }) => {

    const onDelete = (ID) => {
        const newArray = itens.filter((transaction) => transaction.id !== ID);
        setItens(newArray);
        localStorage.setItem("transactions", JSON.stringify(newArray));
    };

    return (
        <css.Table>
            <css.Thead>
                <css.Tr>
                    <css.Th width={40}>Descrição</css.Th>
                    <css.Th width={40}>Valor</css.Th>
                    <css.Th width={10} alignCenter>Tipo</css.Th>
                    <css.Th width={10}></css.Th>
                </css.Tr>
            </css.Thead>
            <css.Tbody>
                {itens?.map((item, index) => (
                    <TableItem key={index} item={item} onDelete={onDelete}></TableItem>
                ))}
            </css.Tbody>
        </css.Table>
    )
}

export default Table;