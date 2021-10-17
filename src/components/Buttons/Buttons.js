export default function Button(props) {
    if (props.type === "normal") {
        return (
            <button
                className={`bg-primary-500 text-white font-semibold px-5 py-3 rounded-lg ${props.className}`}
                onClick={props.handleClick}
            >
                {props.text}
            </button>
        );
    } else if (props.type === "outline") {
        return (
            <button
                className={`text-primary-500 font-semibold outline-blue px-5 py-3 rounded-lg ${props.className}`}
                onClick={props.handleClick}
            >
                {props.text}
            </button>
        );
    }else if (props.type === "outlinewhite") {
        return (
            <button
                className={`text-primary-500 font-semibold outline-white px-5 py-3 rounded-lg ${props.className}`}
                onClick={props.handleClick}
            >
                {props.text}
            </button>
        );
    } else if (props.type === "iconBtn") {
    } else if (props.type === "badgeBtn") {
    }
}
