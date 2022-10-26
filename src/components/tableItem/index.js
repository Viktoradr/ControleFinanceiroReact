import * as css from "./styles";
import { ArrowCircleDownTwoTone, ArrowCircleUpTwoTone, DeleteOutlineTwoTone } from "@mui/icons-material";


const TableItem = ({ item, onDelete }) => {
    return(
        <css.Tr>
            <css.Td>{item.description}</css.Td>
            <css.Td>{item.amount}</css.Td>
            <css.Td alignCenter>
                {item.expense ? 
                    (<ArrowCircleDownTwoTone color="error" />) :
                    (<ArrowCircleUpTwoTone color="success"/>)
                }
            </css.Td>
            <css.Td alignCenter>
                <DeleteOutlineTwoTone onClick={() => onDelete(item.id)} />
            </css.Td>
        </css.Tr>
    )
}

export default TableItem;