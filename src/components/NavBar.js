import UnLoggedNavBar from "./NavBars/UnLoggedNavBar";
import LoggedNavBar from "./NavBars/LoggedNavBar";

export default function NavBar(props) {
    if (props.isLog || props.isLocal) {
        return (
            <LoggedNavBar
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
