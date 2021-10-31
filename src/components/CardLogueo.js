import CardLogin from "./Cards/Register/CardLogin";
import CardRegister from "./Cards/Register/CardRegister";

export default function Cards(props){
    if(props.option === "login"){
        return(
            <>
                <CardLogin/>
            </>
        );
    }else if (props.option === "register"){
        return(
            <>
                <CardRegister/>
            </>
        );
    }
}