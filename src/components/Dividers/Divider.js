export default function Divider(props) {
    if (props.type === "normal-hor") {
        return (<hr className="bg-secondary-dark opacity opacity-10 my-2"></hr>);
    }else if (props.type === "line-blue"){
        return (<hr className="border-2 rounded w-3 mx-1 border-primary-500"></hr>);
    }else if (props.type === "line-dark"){
        return (<hr className="border-2 rounded w-3 mx-1 border-secondary-dark"></hr>);
    }
}
