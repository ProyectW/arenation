import UnLoggedNavBar from "./NavBars/UnLoggedNavBar";
import LoggedNavBar from "./NavBars/LoggedNavBar";
import LoggedAsLocalNavBar from "./NavBars/LoggedAsLocalNavBar";
import LocalNavBar from "./NavBars/LocalNavBar";

export default function NavBar(props) {
    if (props.isLog && props.isAway) {
        return (
            <LoggedNavBar
                userData={{
                    avatar: `https://es.gravatar.com/userimage/194712154/18f91faeb0511ab57432decc5d49e6f2.jpg?size=${36}`,
                    userName: props.nombres,
                    userLastname: props.apellidos,
                }}
            />
        );
    } else if (props.isLog && props.isLocal && !props.openManager) {
        return (
            <LoggedAsLocalNavBar
                userData={{
                    avatar: `https://es.gravatar.com/userimage/194712154/18f91faeb0511ab57432decc5d49e6f2.jpg?size=${36}`,
                    userName: "Jose",
                    userLastname: "Ayazo",
                }}
            />
        );
    } else if (props.isLog && props.isLocal && props.openManager) {
        return (
            <LocalNavBar
                userData={{
                    avatar: `https://es.gravatar.com/userimage/194712154/18f91faeb0511ab57432decc5d49e6f2.jpg?size=${36}`,
                    userName: "Jose",
                    userLastname: "Ayazo",
                }}
            />
        );
    } else if (props.isLog === false) {
        return <UnLoggedNavBar />;
    }
    // return <TestNavBar avatar="JA" />;
}
