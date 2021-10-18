import { Link } from "react-router-dom";

export default function Button(props) {
    if (props.type === "normal") {
        return (
            <Link to={props.link}>
                <button
                className={`bg-primary-500 text-white font-semibold px-5 py-3 rounded-lg ${props.className}`}
                onClick={props.handleClick}
                >
                    {props.text}
                </button>
            </Link>
        );
    } else if (props.type === "outline") {
        return (
            <Link to={props.link}>
                <button
                className={`text-primary-500 font-semibold outline-${props.color} px-5 py-3 rounded-lg ${props.className}`}
                onClick={props.handleClick}
                >
                    {props.text}
                </button>
            </Link>
        );
    } else if (props.type === "iconBtn") {
    } else if (props.type === "badgeBtn") {
    }
}
