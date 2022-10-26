import { ArrowCircleDownTwoTone, ArrowCircleUpTwoTone, CurrencyExchangeTwoTone } from "@mui/icons-material";
import ResumoItem from "../resumoItem";
import * as css from "./styles";

const Resumo = ({ income, expense, total }) => {

    const list = [
        { id: 0, title: "Entradas", value: income, icon: ArrowCircleUpTwoTone, color: "success" },
        { id: 1, title: "Saída", value: expense, icon: ArrowCircleDownTwoTone, color: "error" },
        { id: 2, title: "Total", value: total, icon: CurrencyExchangeTwoTone, color: "primary" }
    ];

    return (
        <css.Container>
            {list.map((item, index) => (
                <ResumoItem 
                    key={index} 
                    Title={item.title} 
                    Icon={item.icon} 
                    Color={item.color}
                    Value={item.value}
                />
            ))}
        </css.Container>
    )
}

export default Resumo;