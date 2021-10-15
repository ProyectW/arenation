import { ReactComponent as UserIcon } from "../../../src/assets/img/userIcon.svg";
export default function Avatar(props) {
    if (props.isLogged) {
    } else {
        return (
            <div className="p-3 rounded-lg bg-secondary-light text-secondary-gray fill-current font-gilroy font-semibold">
                {props.avatar}
                <UserIcon className="fill-current text-primary-500" />
            </div>
        );
    }
}
