import CardLoginP from "./Cards/Register/CardLogin";
import CardRegister from "./Cards/Register/CardRegister";

export default function Cards(props) {
    if (props.option === "login") {
        return (
            <>
                <CardLoginP isOpen={props.isOpen} setIsOpen={props.setIsOpen} />
            </>
        );
    } else if (props.option === "register") {
        return (
            <>
                <CardRegister
                    isOpen={props.isOpen}
                    setIsOpen={props.setIsOpen}
                />
            </>
        );
    }
}
