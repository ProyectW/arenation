import Login from "./Loguers/login";
import Register from "./Loguers/register";
import RegisterFull from "./Loguers/registerFull";

export default function Log(props) {
    if (props.log === "login"){  
        return(
            <>
                <Login/>
            </>
        );
    }else if (props.log === "register"){  
        return(
            <>
                <Register/>
            </>
        );
    }else if (props.log === "registerFull"){  
        return(
            <>
                <RegisterFull/>
            </>
        );
    }
}