import { NavLink} from "react-router-dom";

function Logo(){
    return(
        <div className="logo">
            <NavLink to="Home">
            <img className="logo" src="./cloud2labs_logo.svg" alt="Logo"></img></NavLink>
        </div>
    )
}

export default Logo;