import FooterLocal from "./Footers/FooterLocal";
import FooterUnLocal from "./Footers/FooterUnLocal";
import FooterUnLogged from "./Footers/FooterUnLogged";

export default function Footer(props) {
    if (props.footer === "Local"){  
        return(
            <>
                <FooterLocal/>
            </>
        );
    }else if (props.footer === "UnLocal"){  
        return(
            <>
                <FooterUnLocal/>
            </>
        );
    }else if (props.footer === "UnLogged"){  
        return(
            <>
                <FooterUnLogged/>
            </>
        );
    }
}