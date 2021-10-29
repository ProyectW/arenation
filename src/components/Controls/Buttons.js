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
                    className={`text-${props.textColor} font-semibold outline-${props.color} px-5 py-3 rounded-lg ${props.className}`}
                    onClick={props.handleClick}
                >
                    {props.text}
                </button>
            </Link>
        );
    } else if (props.type === "iconBtn") {
        return (
            <Link to={props.link}>
                <button
                    className={`flex items-center justify-center text-primary-500 font-semibold outline-${props.color} px-5 py-3 rounded-lg ${props.className}`}
                    onClick={props.handleClick}
                >
                    {props.children}
                    {props.text}
                </button>
            </Link>
        );
    } else if (props.type === "badgeBtn") {
        return (
            <Link to={props.link}>
                <button
                    className={`flex items-center justify-center text-primary-500 font-semibold outline-${props.color} px-5 py-3 rounded-lg ${props.className}`}
                    onClick={props.handleClick}
                >
                    {props.text}
                    <div className="bg-primary-500 text-white font-semibold px-2 ml-1 rounded-full">
                        {props.count}
                    </div>
                </button>
            </Link>
        );
    }
}
