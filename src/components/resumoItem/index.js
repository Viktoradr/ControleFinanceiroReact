import * as css from "./styles";

const ResumoItem = ({ Title, Icon, Color, Value }) => {
    return (<css.Box>
        <css.Header>
            <css.HeaderTitle>{Title}</css.HeaderTitle>
            <Icon color={Color}/>
        </css.Header>
        <css.Total>{Value}</css.Total>
    </css.Box>)
}

export default ResumoItem;