import { ReactComponent as UserIcon } from "../../../src/assets/img/userIcon.svg";
export default function Avatar(props) {
    if (props.isLogged) {
        return (
            <div
                className={`rounded-lg bg-secondary-light text-secondary-gray ${props.className}`}
            >
                <img
                    src={props.avatar}
                    alt="User profile"
                    className="object-cover rounded-lg w-12"
                />
            </div>
        );
    } else {
        return (
            <div
                className={`p-3 rounded-lg bg-secondary-light text-secondary-gray fill-current font-gilroy font-semibold ${props.className}`}
            >
                <UserIcon className="fill-current text-primary-500" />
            </div>
        );
    }
}
