import "./Back.css"
import { useHistory, useLocation } from "react-router-dom";
export default function Back(){
    let history = useHistory();
    let location = useLocation()
    if(location.pathname === "/") return ""
    return(
        <ion-icon onClick={() => history.goBack()} name="arrow-back"></ion-icon>  
    )
 
}
